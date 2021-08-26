import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
        <p>
            <img src="img/icon.png" alt=""/>
            Lorem Ipsum inc.<br/>
            2021, All rights reserved<br/>
            Designed by agarictree<br/>
        </p>
        <p>
            lorem@ipsum.org<br/>
            +79876543210<br/>
        </p>
            <ul>
                <li>
                    <Link to="/About">About</Link></li>
                <li>
                    <a href="/">Price policy</a></li>
                <li>
                    <a href="/">Materials</a></li>
                <li>
                    <a href="/">Work process</a></li>
                <li>
                    <a href="/">Social media</a></li>
                <li>
                    <a href="/">Lisence</a></li>
            </ul>
    </footer>
    )
}