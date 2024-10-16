import React, { useState } from 'react';
import { BsSunFill } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [active, setIsActive] = useState("Home");
    const location = useLocation();

    const isProjectDetailsPage = location.pathname.startsWith('/project/');

    return (
        <nav className={`w-full px-10 py-6 flex justify-between z-20 top-0 sm:fixed relative ${isDarkMode ? "nav-active" : "nav-no-active"}`}>
            <Link to="/">
            <h1 className='text-3xl font-bold'>ROHIT</h1>
            </Link>
            {!isProjectDetailsPage && (
                <ul className='items-center gap-10 text-lg font-bold hidden sm:flex'>
                    <AnchorLink href='#Home'>
                        <li onClick={() => setIsActive("Home")} className={`cursor-pointer p-1 ${active === "Home" ? "border-b-4 border-orange-400" : ""}`}>Home</li>
                    </AnchorLink>
                    <AnchorLink offset={140} href='#Skills'>
                        <li onClick={() => setIsActive("Skills")} className={`cursor-pointer p-1 ${active === "Skills" ? "border-b-4 border-orange-400" : ""}`}>Skills</li>
                    </AnchorLink>
                    <AnchorLink offset={140} href='#Projects'>
                        <li onClick={() => setIsActive("Projects")} className={`cursor-pointer p-1 ${active === "Projects" ? "border-b-4 border-orange-400" : ""}`}>Projects</li>
                    </AnchorLink>
                    <AnchorLink offset={140} href='#About'>
                        <li onClick={() => setIsActive("About")} className={`cursor-pointer p-1 ${active === "About" ? "border-b-4 border-orange-400" : ""}`}>About</li>
                    </AnchorLink>
                    <AnchorLink offset={140} href='#Contact'>
                        <li onClick={() => setIsActive("Contact")} className={`cursor-pointer p-1 ${active === "Contact" ? "border-b-4 border-orange-400" : ""}`}>Contact</li>
                    </AnchorLink>
                </ul>
            )}
            <div className='flex gap-4 justify-center items-center'>
            <button onClick={toggleTheme}>
                {isDarkMode ? <BsSunFill className='text-[1.2rem]' /> : <FaMoon className='text-1xl'/>}
            </button>
            {isProjectDetailsPage && (<Link to="/"><MdHome className='text-2xl'/></Link>)}
            </div>
        </nav>
    );
};

export default Navbar;
