import React from "react";
import { Link } from "react-router-dom";
import Recomend from "./recommendations";

export default function About() {
    return (
        <>
        <h3>About Lorem Ipsum</h3>
        <article id="article_about">
            <div id="galleryPrew">
                <img src="img/minigallery/6tSt7-fp9rk.jpg" alt="" />
                <img src="img/minigallery/D_dExHdJjWQ.jpg" alt="" />
                <img src="img/minigallery/FBA6-oUMZUw.jpg" alt="" />
                <img src="img/minigallery/hnfFzFho998.jpg" alt="" />
                <img src="img/minigallery/iH3zrYKPVxc.jpg" alt="" />
                <img src="img/minigallery/yHG3rZKsUh8.jpg" alt="" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aspernatur eum rem itaque, voluptate magnam, aperiam nostrum placeat quibusdam, maxime amet dignissimos vitae excepturi consequatur ipsam! Recusandae aperiam repudiandae tempore!
                Quas ducimus, rerum doloremque animi accusantium quidem voluptas totam eum, dolorum minima voluptate facere ipsam saepe, corporis veniam perferendis. Optio, dolores cum! Sequi repellendus beatae tempore earum corporis! Est, nisi!
                Aliquam eum soluta veniam illum sunt tenetur labore vitae quidem nemo, optio repellendus tempore laboriosam! Obcaecati illo temporibus facere voluptate, eveniet magni. Aspernatur animi natus voluptatem illum est modi ex! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reprehenderit illo tempore dolorem error? Dolores, enim esse, et excepturi aut sint iusto necessitatibus, pariatur inventore atque possimus illo laboriosam eligendi.
                <button className="viewBtn" >
                    <Link to="/Gallery">
                    See gallery <i class="bi bi-arrow-right-circle"></i>
                    </Link>
                    </button>
            </p>
        </article>
        <Recomend />
        <section id="ab_b">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat fugit dolorem perspiciatis harum, quas voluptas accusamus minima quae alias, perferendis quis. </p>
        </section>
        </>
    )
}