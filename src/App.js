import React, { useEffect } from "react";
import { Home, Resume, Projects, Contact, Error } from "./pages";
import { Header, Footer } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <>
            <Header />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default App;
