"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Me() {
    return (
        <motion.div>
            <div className="content-container flex flex-col items-center">
                <div className="page-title-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="page-title-video h-8 mt-2"
                    >
                        <source src="/animations/me_anim.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="bio-content text-neutral-100 max-w-3xl mx-auto leading-relaxed space-y-4 text-center">
                    <Image
                        src="/gallery/Profile Picture.jpg"
                        alt="Profile Picture"
                        width={400}
                        height={400}
                        className="mx-auto pb-6"
                    />

                    <p>
                        I’m a computer science student and multidisciplinary creative operating at the
                        intersection of music, technology, and design. I’m looking for high-impact
                        roles in music tech and application-focused industries where creative
                        experimentation and technical depth are valued.
                    </p>

                    <p>
                        I thrive in environments where I can contribute to a community, build
                        distinctive digital experiences, and bring together engineering, music, and
                        creative direction to solve problems in original ways.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
