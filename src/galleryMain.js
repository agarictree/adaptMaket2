import React, { useState } from "react";
import Videoblock from "./videoblock";
let arr = [
    ["35m in Prague", ["a4Fd6GDrYXc.jpg", "OswWWxX4cec.jpg"]], ["52m in Krakow", ["f30ENpP1T7s.jpg", "UdNk1NQezZ8.jpg"]], ["cottage in Greece", ["fpeIWFyBH0U.jpg", "UReY0nCXY_o.jpg"]], ["beautiful kitchen in 40m apartament", ["geh28ZInCnM.jpg", "vDlPo5K8z_w.jpg"]], ["design in home in Venice", ["Gm5Fpnlq8uQ.jpg", "xbMEoEvF4n0.jpg"]], ["white dining room in 25m apartament", ["Gm5Fpnlq8uQ.jpg", "oocw4LiMblA.jpg"]]
]

export default function Gallery() {
    return (
        <>
        <Videoblock />
        <h3>Gallery</h3>
        <div className="gallery_container">
        <div id="gallery_pr">
                <img src="img/minigallery/v2/29KU1SHh1zw.jpg" alt="" />
                <img src="img/minigallery/v2/gkMhQkV2ZRw.jpg" alt="" />
                <img src="img/minigallery/v2/hidU52g6zv4.jpg" alt="" />
                <img src="img/minigallery/v2/i7nDuU_0op8.jpg" alt="" />
                <img src="img/minigallery/v2/rlkrvtpxkPY.jpg" alt="" />
                <img src="img/minigallery/v2/SQEpHnmqIXQ.jpg" alt="" />
                <img src="img/minigallery/v2/tFXnCkkiQKQ.jpg" alt="" />
                <img src="img/minigallery/v2/yVXfdX5bIWs.jpg" alt="" />
                <img src="img/minigallery/v2/ZUuYA_Ap408.jpg" alt="" />
        </div>
        <section className="faq_list">
            <ul>
                {
                    arr.map((el, k) => {
                        return (
                            <GalleryFabric text={el[0]} images={el[1]}/>
                        )
                    })
                }
            </ul>
        </section>
        </div>
        </>
    )
}
function GalleryFabric(props) {
    let [state, setState] = useState(true);
    function open(e) {
        return state ? setState(false) : setState(true);
    }
    return (
        <li onClick={open}>
            <h4>{props.text}</h4>
            <div className="img_block" hidden={state}>
                {
                    props.images.map((el) => {
                        return (
                            <img src={"img/gallery/" + el} alt="" />
                        )
                    })
                }
            </div>
        </li>
    )
}