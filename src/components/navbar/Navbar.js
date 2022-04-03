import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import localData from "../../localData";

// let timeout = ''
export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const navs = [
        { name: "resume", pathname: "/resume" },
        { name: "projects", pathname: "/projects" },
        { name: "contact", pathname: "/contact" },
    ];

    const [isCollapsing, setIsCollapsing] = useState(false);
    const [isShown, setIsShown] = useState(false);

    let navbarCollapse = useRef();

    useEffect(() => isCollapsing && setIsShown(!isShown), [isCollapsing]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.querySelector("main").classList.add("show");
    //     });
    // }, [location]);

    // const handleOnClick = (e) => {
    //     const link = e.currentTarget.getAttribute("to");

    //     document.querySelector("main").classList.remove("show");
    //     clearTimeout(timeout)
    //     timeout = setTimeout(() => navigate(link), 700);
    // };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-brand-wrapper">
                    <Link className="navbar-brand" to="/">
                        john wilson
                    </Link>
                    <span className="text-muted">editor</span>
                </div>
                <button
                    id="hamburger-1"
                    className={`hamburger navbar-toggler ${isShown ? "is-active" : ""}`}
                    type="button"
                    onClick={() => setIsCollapsing(true)}
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <div
                    ref={navbarCollapse}
                    className={`navbar-collapse ${isCollapsing ? "collapsing" : "collapse"} ${isShown ? "show" : ""}`}
                    id="navbarSupportedContent"
                    onTransitionEnd={() => setIsCollapsing(false)}
                    style={isShown && isCollapsing ? { transform: "none", opacity: 1 } : {}}
                >
                    <ul className="navbar-nav me-auto">
                        {navs.map((item, index) => {
                            const { name, pathname } = item;
                            return (
                                <li className="nav-item" key={index}>
                                    <Link
                                        className={`nav-link ${pathname === location.pathname ? "active" : ""}`}
                                        aria-current="page"
                                        to={pathname}
                                        onClick={()=>setIsCollapsing(true)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
