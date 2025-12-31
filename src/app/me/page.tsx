"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Me() {
    return (
        <motion.div>
            <span className="content-container">
                <span className="bio-content">
                    <Image
                        src="/gallery/Profile Picture.png"
                        alt="Profile Picture"
                        width={200}
                        height={200}/>

                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sagittis massa, ultrices facilisis diam. Praesent maximus ex libero, non gravida lorem sodales eget. Quisque tortor felis, dapibus in feugiat non, dignissim in augue. Nulla non diam vel urna tristique laoreet. Etiam cursus dignissim eros, non scelerisque tellus sagittis condimentum. Integer purus enim, tempus sed augue in, pulvinar tristique ligula. Mauris imperdiet nulla sit amet pharetra porta. Nunc vel mi sagittis augue placerat tincidunt consequat sit amet quam. In hac habitasse platea dictumst. Vivamus auctor commodo risus, ac mattis mi. Vestibulum elementum dui justo, non finibus enim lobortis eget. Vestibulum.</p>

                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sagittis massa, ultrices facilisis diam. Praesent maximus ex libero, non gravida lorem sodales eget. Quisque tortor felis, dapibus in feugiat non, dignissim in augue. Nulla non diam vel urna tristique laoreet. Etiam cursus dignissim eros, non scelerisque tellus sagittis condimentum. Integer purus enim, tempus sed augue in, pulvinar tristique ligula. Mauris imperdiet nulla sit amet pharetra porta. Nunc vel mi sagittis augue placerat tincidunt consequat sit amet quam. In hac habitasse platea dictumst. Vivamus auctor commodo risus, ac mattis mi. Vestibulum elementum dui justo, non finibus enim lobortis eget. Vestibulum. </p>

                </span>
            </span>
        </motion.div>
    );
}