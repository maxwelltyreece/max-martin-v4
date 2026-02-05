"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "../../lib/projects";


export default function Projects() {
    return (
        <motion.div>
            <div className="content-container">
                <div>
                    <ProjectCarousel projects={projects} />
                </div>
            </div>
        </motion.div>
    );
}
