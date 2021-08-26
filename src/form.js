import React from "react";
export default function Form() {
    return (
        <form>
        <h3>Feedback</h3>
        <p>
            For feedback you can fill out this form below. Our contact service will contact you within 12 hours.
        </p>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name"/>

        <label htmlFor="email">Enter your email:</label>
        <input type="text" id="email"/>

        <textarea id="info" cols="30" rows="5" placeholder="Enter information here"></textarea>
        <button type="submit">Submit</button>
    </form>
    )
}