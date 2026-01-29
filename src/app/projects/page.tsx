"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "../../lib/projects";


export default function Projects() {
    return (
        <motion.div>
            <div className="content-container">
                <div className="page-title-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="page-title-video"
                    >
                        <source src="/animations/projects_anim.mp4" type="video/mp4" />
                    </video>
                </div>
                <div>
                    <ProjectCarousel projects={projects} />
                </div>
            </div>
        </motion.div>
    );
}
