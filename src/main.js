import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Faq from "./faq.js";
import GalleryMain from "./galleryMain.js";
import Contact from "./contact.js";

export default function Main() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/FAQ" component={Faq}/>
            <Route path="/Gallery" component={GalleryMain}/>
            <Route path="/Contact" component={Contact}/>
        </Switch>
    )
}