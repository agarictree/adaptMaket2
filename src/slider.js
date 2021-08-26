import React from "react";
import resizImage from "./resizeImage";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = Object.keys(importAll(require.context('./img/slider', false, /\.(png|jpe?g|svg)$/)));

export default function Slider() {
    function scrollRight(e) {
        let container = document.querySelector(".imgContainer");
        let parent = container.closest(".slider");
        let coords = getComputedStyle(container);
        let leftPos = parseFloat(coords.left);
        let rightPos = parseFloat(coords.right);
        let childs = Array.from(container.children);
        let x = 0;
        childs.forEach((elem) => {
            let w = parseFloat(getComputedStyle(elem).width);
            x += w;
        })
        let totalW = x - parseFloat(coords.width);
        container.style.left = leftPos - 150 + "px";
        console.log(leftPos, rightPos);
        if(totalW <= -100) {
            container.style.left = leftPos + "px";
        }
    }
    function scrollLeft() {
        let container = document.querySelector(".imgContainer");
        let parent = container.closest(".slider");
        let coords = getComputedStyle(container);
        let leftPos = parseFloat(coords.left);
        let rightPos = parseFloat(coords.right);
        let width = parent.offsetWidth;
        container.style.left = leftPos + 150 + "px";
        console.log(leftPos, rightPos);
        if(leftPos >= 0) {
            container.style.left = leftPos + "px";
        }
    }
    return (
        <section className="slider">
            <div id="arrowLeft" onClick={scrollLeft}><i className="bi bi-caret-left-square-fill"></i></div>
            
            <div id="arrowRight" onClick={scrollRight}><i className="bi bi-caret-right-square-fill"></i></div>
            <div className="imgContainer">
            {
                images.map((url, i) => {
                    return <img src={"img/slider/" + url} alt="" key={i} onClick={resizImage}/>
                })
            }
            </div>

        </section>
    )
}