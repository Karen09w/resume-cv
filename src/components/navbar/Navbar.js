import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import localData from "../../localData";
import { Button, Field } from "../../components";

export default function Navbar() {
    const location = useLocation();
    const navs = [
        { name: "home", pathname: "/" },
        { name: "about", pathname: "/about" },
        { name: "movies", pathname: "/movies" },
    ];

    const { togglerIcon } = localData.navbar;
    const { telegram } = localData.unsubscribe;

    const [isCollapsing, setIsCollapsing] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const [isDropdownShown, setIsDropdownShown] = useState(false);

    let navbarCollapse = useRef();

    useEffect(() => {
        if (!isCollapsing) return;
        setIsShown(!isShown);
    }, [isCollapsing]);

    const getHeight = () => {
        let computedHeight = null;
        [...navbarCollapse.current.children].forEach((each) => (computedHeight += getAbsoluteHeight(each)));
        return computedHeight + "px";
    };

    const getAbsoluteHeight = (el) => {
        el = typeof el === "string" ? document.querySelector(el) : el;

        let styles = window.getComputedStyle(el);
        let margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        let border = parseFloat(styles["borderTop"]) + parseFloat(styles["borderBottom"]);

        return Math.ceil(el.offsetHeight + margin + border);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                    className={`navbar-toggler ${isShown ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => setIsCollapsing(true)}
                >
                    <span className="navbar-toggler-icon">{togglerIcon}</span>
                </button>
                <div
                    ref={navbarCollapse}
                    className={`navbar-collapse ${isCollapsing ? "collapsing" : "collapse"} ${isShown ? "show" : ""}`}
                    id="navbarSupportedContent"
                    onTransitionEnd={() => setIsCollapsing(false)}
                    style={isShown && isCollapsing ? { height: getHeight() } : {}}
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
                                    >
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                onClick={() => setIsDropdownShown(!isDropdownShown)}
                                onBlur={() => setIsDropdownShown(false)}
                            >
                                Dropdown
                            </a>
                            <ul className={`dropdown-menu ${isDropdownShown ? "show" : ""}`}>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control" type="search" placeholder="Search" />
                        <Button className="btn-outline-light">
                            search
                            <span className="endIcon">{telegram}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
