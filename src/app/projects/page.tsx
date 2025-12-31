"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "@/lib/projects";


export default function Projects() {
    return (
        <motion.div>
            <span className="content-container">
                <span>
                    <ProjectCarousel projects={projects} />
                </span>
            </span>
        </motion.div>
    );
}