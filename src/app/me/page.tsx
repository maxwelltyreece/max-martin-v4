"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Me() {
    return (
        <motion.div className="content-container flex flex-col items-center">
                <div className="bio-content text-neutral-100 max-w-3xl mx-auto leading-relaxed space-y-4 text-center">
                    <Image
                        src="/gallery/Profile Picture.jpg"
                        alt="Profile Picture"
                        width={260}
                        height={260}
                        className="mx-auto pb-6"
                    />

                    <p className="text-sm sm:text-base md:text-lg">
                        I’m a computer science student and multidisciplinary creative operating at the
                        intersection of music, technology, and design. I’m looking for high-impact
                        roles in music tech and application-focused industries where creative
                        experimentation and technical depth are valued.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg">
                        I thrive in environments where I can contribute to a community, build
                        distinctive digital experiences, and bring together engineering, music, and
                        creative direction to solve problems in original ways.
                    </p>
                </div>
        </motion.div>
    );
}
