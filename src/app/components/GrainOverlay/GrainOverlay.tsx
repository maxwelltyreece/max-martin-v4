"use client";

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NoiseGrainMaterial = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Using Ashima's simplex noise - much higher quality
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        opacity: { value: 0.12 },
        scale: { value: 1200.0 },
        speed: { value: 1.0 }
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float opacity;
        uniform float scale;
        uniform float speed;
        varying vec2 vUv;
        
        // Stefan Gustavson's updated psrdnoise (2024)
        float snoise(vec2 v) {
          // Hack: offset y slightly to hide some rare artifacts
          v.y += 0.01;
          // Skew to hexagonal grid
          vec2 uv = vec2(v.x + v.y*0.5, v.y);
          
          vec2 i0 = floor(uv);
          vec2 f0 = fract(uv);
          // Traversal order
          vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

          // Unskewed grid points in (x,y) space
          vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);
          vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);
          vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);

          // Integer grid point indices in (u,v) space
          i1 = i0 + i1;
          vec2 i2 = i0 + vec2(1.0, 1.0);

          // Vectors in unskewed (x,y) coordinates from each corner to evaluation point
          vec2 x0 = v - p0;
          vec2 x1 = v - p1;
          vec2 x2 = v - p2;

          vec3 iu = vec3(i0.x, i1.x, i2.x);
          vec3 iv = vec3(i0.y, i1.y, i2.y);

          // Compute one pseudo-random hash value for each corner
          vec3 hash = mod(iu, 289.0);
          hash = mod((hash*51.0 + 2.0)*hash + iv, 289.0);
          hash = mod((hash*34.0 + 10.0)*hash, 289.0);

          // Pick a pseudo-random angle (alpha = 0 for non-rotating gradients)
          vec3 psi = hash * 0.07482;
          vec3 gx = cos(psi); 
          vec3 gy = sin(psi);

          // Reorganize for dot products below
          vec2 g0 = vec2(gx.x, gy.x);
          vec2 g1 = vec2(gx.y, gy.y);
          vec2 g2 = vec2(gx.z, gy.z);

          // Radial decay with distance from each simplex corner
          vec3 w = 0.8 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2));
          w = max(w, 0.0);
          vec3 w2 = w * w;
          vec3 w4 = w2 * w2;

          // The value of the linear ramp from each of the corners
          vec3 gdotx = vec3(dot(g0, x0), dot(g1, x1), dot(g2, x2));

          // Multiply by the radial decay and sum up the noise value
          float n = dot(w4, gdotx);

          // Scale the return value to fit nicely into the range [-1,1]
          return 10.9 * n;
        }
        
        void main() {
          vec2 st = vUv * scale;
          
          // Multi-octave noise for realistic film grain
          float noise = 0.0;
          float amplitude = 1.0;
          float frequency = 1.0;
          
          // First octave - main grain structure
          noise += amplitude * snoise(st * frequency + time * speed * 1.2);
          amplitude *= 0.5;
          frequency *= 2.0;
          
          // Second octave - finer detail
          noise += amplitude * snoise(st * frequency + time * speed * 1.0);
          amplitude *= 0.5;
          frequency *= 2.0;
          
          // Third octave - very fine grain
          noise += amplitude * snoise(st * frequency + time * speed * 0.8);
          
          // Convert to grain pattern
          float grain = 0.5 + noise * 0.5;
          
          // Add some randomness for more authentic look
          vec2 randomSeed = vUv + time * 0.1;
          float random = fract(sin(dot(randomSeed, vec2(12.9898, 78.233))) * 43758.5453);
          grain = mix(grain, random, 0.1);
          
          gl_FragColor = vec4(vec3(grain), opacity);
        }
      `,
      transparent: true,
      blending: THREE.MultiplyBlending,
    });
  }, []);

  // Animate the time uniform for moving grain
  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} material={material}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
};

const GrainOverlay = () => {
  const glRef = useRef<any>(null)
  const camRef = useRef<any>(null)

  // keep canvas and camera sized to the viewport
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth
      const h = window.innerHeight
      if (glRef.current) glRef.current.setSize(w, h)
      if (camRef.current) {
        camRef.current.aspect = w / h
        camRef.current.updateProjectionMatrix()
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleCreated = ({ gl, camera }: any) => {
    glRef.current = gl
    camRef.current = camera
    const w = window.innerWidth
    const h = window.innerHeight
    try {
      gl.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    } catch (e) {
      // no-op if something can't be sized immediately
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        // ensure the grain overlays the page content (main has zIndex: 10)
        zIndex: 9999,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        filter: 'blur(0.5px)',
        opacity: 0.15,
      }}
    >
      <Canvas
        onCreated={handleCreated}
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}
        gl={{ alpha: true, premultipliedAlpha: false }}
      >
        <NoiseGrainMaterial />
      </Canvas>
    </div>
  )
}

export default GrainOverlay;
