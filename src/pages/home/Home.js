import React from "react";
import { Button } from "../../components";
import avatar from "../../assets/images/avatar.webp";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="showcase">
                <motion.div className="showcase-center" initial={{ opacity: 0, y: '10%' }} animate={{ opacity: 1, y: '0' }} transition={{duration: 1}}>
                    <div className="col col-1 info">
                        <h1 className="showcase-title">hello</h1>
                        <h5 className="showcase-description">a bit about me</h5>
                        <p className="showcase-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius eum dignissimos aut
                            minus ipsa officia deleniti quaerat animi alias!
                        </p>
                        <div className="btns-wrapper">
                            <Button className="btn-warning" index="0">
                                <p className="btn-inner">resume</p>
                            </Button>
                            <Button className="btn-danger" index=".2">
                                <p className="btn-inner">projects</p>
                            </Button>
                            <Button className="btn-primary" index=".4">
                                <p className="btn-inner">contact</p>
                            </Button>
                        </div>
                    </div>
                    <div className="col col-2 avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                </motion.div>
            </section>
        </motion.main>
    );
}
