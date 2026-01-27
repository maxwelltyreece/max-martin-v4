'use client'

import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick(href: string) {
    router.push(href);
    setIsMenuOpen(false);
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.7, duration: 1.5, ease: "easeOut" }}
    >
      <span className='flex justify-between px-6 pt-5 md:px-12'>
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden cursor-pointer flex items-center"
            aria-label="Open menu"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-10 w-auto object-contain"
            >
              <source src="/animations/menu_anim.mp4" type="video/mp4" />
            </video>
          </button>

          <nav className="hidden md:flex gap-4 place-items-start">
            {!pathname.startsWith('/me') && (
              <button onClick={() => handleMenuClick('/me')} className="cursor-pointer flex items-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-10 w-auto object-contain"
                >
                  <source src="/animations/me_anim.mp4" type="video/mp4" />
                </video>
              </button>
            )}

            {pathname !== '/' && (
              <button onClick={() => handleMenuClick('/')} className="cursor-pointer flex items-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-10 w-auto object-contain"
                >
                  <source src="/animations/home_anim.mp4" type="video/mp4" />
                </video>
              </button>
            )}

            {!pathname.startsWith('/projects') && (
              <button onClick={() => handleMenuClick('/projects')} className="cursor-pointer flex items-center">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-10 w-auto object-contain"
                >
                  <source src="/animations/projects_anim.mp4" type="video/mp4" />
                </video>
              </button>
            )}
          </nav>
        </div>

        <h2 className="hidden md:flex gap-3">
          <a href="https://www.behance.net/maxwellmartin2" target="_blank" rel="noopener noreferrer">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-10 w-auto object-contain"
            >
              <source src="/animations/beHance_anim.mp4" type="video/mp4" />
            </video>
          </a>

          <a href="https://github.com/maxwelltyreece" target="_blank" rel="noopener noreferrer">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-10 w-auto object-contain"
            >
              <source src="/animations/github_anim.mp4" type="video/mp4" />
            </video>
          </a>

          <a href="https://www.linkedin.com/in/maxwell-martin-188195206/" target="_blank" rel="noopener noreferrer">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-10 w-auto object-contain"
            >
              <source src="/animations/linkedIn_anim.mp4" type="video/mp4" />
            </video>
          </a>
        </h2>
      </span>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative h-full px-6 pt-5 md:px-12">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer flex items-center"
                aria-label="Close menu"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-10 w-auto object-contain"
                >
                  <source src="/animations/close_anim.mp4" type="video/mp4" />
                </video>
              </button>

              <div className="absolute inset-0 flex items-center justify-center">
                <nav className="flex flex-col items-center gap-8">
                  <button onClick={() => handleMenuClick('/me')} className="cursor-pointer flex items-center">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-12 w-auto object-contain"
                    >
                      <source src="/animations/me_anim.mp4" type="video/mp4" />
                    </video>
                  </button>

                  <button onClick={() => handleMenuClick('/')} className="cursor-pointer flex items-center">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-12 w-auto object-contain"
                    >
                      <source src="/animations/home_anim.mp4" type="video/mp4" />
                    </video>
                  </button>

                  <button onClick={() => handleMenuClick('/projects')} className="cursor-pointer flex items-center">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="h-12 w-auto object-contain"
                    >
                      <source src="/animations/projects_anim.mp4" type="video/mp4" />
                    </video>
                  </button>
                </nav>
              </div>

              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-6">
                <a href="https://www.behance.net/maxwellmartin2" target="_blank" rel="noopener noreferrer">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-10 w-auto object-contain"
                  >
                    <source src="/animations/beHance_anim.mp4" type="video/mp4" />
                  </video>
                </a>

                <a href="https://github.com/maxwelltyreece" target="_blank" rel="noopener noreferrer">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-10 w-auto object-contain"
                  >
                    <source src="/animations/github_anim.mp4" type="video/mp4" />
                  </video>
                </a>

                <a href="https://www.linkedin.com/in/maxwell-martin-188195206/" target="_blank" rel="noopener noreferrer">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-10 w-auto object-contain"
                  >
                    <source src="/animations/linkedIn_anim.mp4" type="video/mp4" />
                  </video>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    
  )
}
