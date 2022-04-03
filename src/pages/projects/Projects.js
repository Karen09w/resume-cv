import React from "react";
import { ProjectCard } from "../../components";
import localData from "../../localData";
import { motion } from "framer-motion";

export default function Projects() {
    const { projects } = localData;

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: .5}}>
            <section className="projects" >
                <div className="container">
                    <h2 className="projects-title" >projects</h2>
                    <div className="card-group project-card-group">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </motion.main>
    );
}
