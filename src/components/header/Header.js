import React from "react";
import {useLocation} from 'react-router-dom'
import {Navbar} from '../'

export default function Header() {
    const location = useLocation()

    const navs = [
        {
            title: 'home page title',
            content: 'home page header',
            subtitle: 'home page subtitle',
            pathname: '/'
        },
        {
            title: 'about page title',
            content: 'about page header',
            subtitle: 'about page subtitle',
            pathname: '/about'
        },
    ]

    return (
        <header className="hero">
            <Navbar/>
            <div className="container">
                {navs.map((nav,index)=>{
                    return <h1 key={index}>{nav.pathname === location.pathname && nav.content}</h1>
                })}
            </div>
        </header>
    );
}
