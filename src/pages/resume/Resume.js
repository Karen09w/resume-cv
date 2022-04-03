import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
    return (
        <motion.main
            className="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <h2 className="resume-title">resume</h2>
            </div>
            <section >
                <div className="container">
                    <article className="experience">
                        <h3 className="experience-title">
                            work
                            <br /> experience
                        </h3>
                        <div className="info-group">
                            <div className="info" >
                                <data className="info-date">2020 - Present</data>
                                <div className="wrapper">
                                    <h6 className="info-title">editor</h6>
                                    <p className="info-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at laborum
                                        voluptatibus consequatur nulla. Fugit itaque quos sequi maxime? Exercitationem.
                                    </p>
                                </div>
                            </div>
                            <div className="info" >
                                <data className="info-date">2020 - Present</data>
                                <div className="wrapper">
                                    <h6 className="info-title">editor</h6>
                                    <p className="info-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at laborum
                                        voluptatibus consequatur nulla. Fugit itaque quos sequi maxime? Exercitationem.
                                    </p>
                                </div>
                            </div>
                            <div className="info" >
                                <data className="info-date">2020 - Present</data>
                                <div className="wrapper">
                                    <h6 className="info-title">editor</h6>
                                    <p className="info-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at laborum
                                        voluptatibus consequatur nulla. Fugit itaque quos sequi maxime? Exercitationem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <div className="divider"></div>

            <section className="education" >
                <div className="container">
                    <article className="education">
                        <h3 className="education-title">education</h3>
                        <div className="info-group">
                            <div className="info" >
                                <data className="info-date">2020 - Present</data>
                                <div className="wrapper">
                                    <h6 className="info-title">
                                        Establishment Name |<br /> Master’s Degree
                                    </h6>
                                    <p className="info-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at laborum
                                    </p>
                                </div>
                            </div>
                            <div className="info" >
                                <data className="info-date">2020 - Present</data>
                                <div className="wrapper">
                                    <h6 className="info-title">
                                        Establishment Name |<br /> Master’s Degree
                                    </h6>
                                    <p className="info-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at laborum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <div className="divider"></div>

            <section className="skills-expertiese" >
                <div className="container">
                    <article className="expertiese">
                        <h3 className="expertiese-title">
                            skills
                            <br /> & expertise
                        </h3>
                        <ul className="details">
                            <li className="details-item" >
                                I'm a paragraph. Click here to add your own text and edit me.
                            </li>
                            <li className="details-item" >
                                I'm a paragraph. Click here to add your own text and edit me.
                            </li>
                            <li className="details-item" >
                                I'm a paragraph. Click here to add your own text and edit me.
                            </li>
                            <li className="details-item" >
                                I'm a paragraph. Click here to add your own text and edit me.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </motion.main>
    );
}
