import React, {useState} from "react";

let images = ["-eKCcQyPldA.jpg", "2-NGBZliIow.jpg", "Dg0t8D2YKHI.jpg", "HHgRmqEcrNg.jpg", "IVWIrDJa1bc.jpg", "P9SXpZ17yss.jpg", "Vi-hVCrSfPs.jpg", "wxqG-_lVu0A.jpg", "zfCYzmGLvs4.jpg"];
export default function Gallery() {
    return (
        <div className="gallery">
            {
                images.map((el, i) => {
                    return (
                        <ContainerFabric key = {i} url={el}/>
                    )
                })
            }
        <p id="galleryBtn">Go to gallery <i className="bi bi-arrow-right"></i></p>
    </div>
    )
}
function ContainerFabric(props) {
    let [state, setState] = useState(true);
    function enter(e) {
        if(e.target.tagName == "IMG") {
        setState(false);
        }
    }
    function leave(e) {
        setState(true);
    }
    return (
        <div className="container" onMouseEnter={enter} onMouseLeave={leave}>
        <p className={state ? "none" : "infoText"}>apartament: 30m<br/>living room: 19m<br/>kitchen: 6m</p>
        <img src={"img/" + props.url} alt=""/>
        </div>
    )
}