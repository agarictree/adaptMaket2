import React from "react";
import Article from "./article.js";
import Gallery from "./gallery.js";
import Recomend from "./recommendations.js";
import Videoblock from "./videoblock.js";
import Logos from "./partners.js";
import Form from "./form.js";
import Slider from "./slider.js";

export default function Home() {
    return (
        <>
            <Article />
            <Slider />
            <Recomend />
            <Gallery />
            <Videoblock/>
            <Logos/>
            <Form/>
        </>
    )
}