import React from "react";
import Form from "./form";

export default function Contact() {
    return (
        <>
        <h3>Contact</h3>
            <section className="contact_block">
                <div className="adress">
                    <h4>Information</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis exercitationem praesentium perspiciatis accusantium, consequatur at fuga esse illum harum possimus voluptate quasi. Error quo impedit sequi, harum neque tempore eaque.</p>
                    <p className="d-block">
                        <span className="fw-bold">Adress: </span>
                        606543, Nigniy Novgorod, Pokrovskaya street, 76
                    </p>
                    <p className="d-block">
                        <span className="fw-bold">Phone: </span>
                        +79876543210
                    </p>
                    <p className="d-block">
                        <span className="fw-bold">Email: </span>
                        lorem@ipsum.org
                    </p>
                </div>
                    <Form />
            </section>
        </>
    )
}