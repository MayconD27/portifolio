import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../assets/css/header.css";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  
    const navBackgroundClass = scrolled ? 'bg-dark' : 'bg-transparent';

    const navClasses = `row p-3 w-100 header fixed-top ${navBackgroundClass}`;

    return (
        <nav className={navClasses}>
            <Link to="/" className="col-2">
                <span>Logo</span>
            </Link>
            <div className="col d-flex justify-content-end" id='navigation'>
                <a  href='#' className="text-center mx-3 btn">Inicio</a>
                <a href='#sobre' className="text-center mx-3 btn">Sobre</a>
                <a className="text-center mx-3 btn">Projetos</a>
                <a className="text-center mx-3 btn">Contatos</a>
            </div>
        </nav>
    );
}