import { useState } from "react";
import logo from "./assets/killjoynails-logo.jpg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-container">
            <img src={logo} alt="logo" className="navbar-logo" />
            <nav className="navbar-nav">
                <h1 className="navbar-title">killjoynails</h1>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`navbar-list ${isMenuOpen ? "open" : ""}`}>
                    <li><a href="/" className="navbar-pages">home</a></li>
                    <li><a href="/portfolio" className="navbar-pages">portfolio</a></li>
                    <li><a href="/book" className="navbar-pages">book</a></li>
                    <li><a href="/contact" className="navbar-pages">contact</a></li>
                </ul>
            </nav>
        </div>
    );
}