import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <nav>
            <img src="img/logot.png" alt="logo" id="logo"/>
            <div id="list">
            <div className="nav-link"><Link to="/">Home</Link></div>
            <div className="nav-link"><Link to="/About">About</Link></div>
            <div className="nav-link"><Link to="/FAQ">FAQ</Link></div>
            <div className="nav-link"><Link to="/Gallery">Gallery</Link></div>
            <div className="nav-link"><Link to="/Contact">Contact</Link></div>
        </div>
        </nav>
        <section className="contact">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum corporis obcaecati?
            </p>
            <button id="contactBtn">Contact
                <span className="icon">
                    <i className="bi bi-envelope"></i>
                </span>
            </button>
        </section>
    </header>
    )
}