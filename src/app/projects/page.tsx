"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "@/lib/projects";


export default function Projects() {
    return (
        <motion.div>
            <span className="content-container">
                <span className="mb-6 flex justify-center md:hidden">
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
                </span>
                <span>
                    <ProjectCarousel projects={projects} />
                </span>
            </span>
        </motion.div>
    );
}
