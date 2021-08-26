import React, { useState } from "react";
let arr = [["1: What about price?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores corporis illo minima? Quo in voluptatem nam accusamus voluptate pariatur a. At consequatur iste repellat dicta cupiditate incidunt consequuntur. Excepturi? Esse doloribus quis quia, distinctio commodi molestiae adipisci nam ipsum culpa! Tempora maiores, cupiditate deleniti deserunt itaque dignissimos molestiae voluptatibus dicta, quibusdam nemo atque dolorum mollitia quod aperiam odit? Commodi."], ["2: High price materials", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores corporis illo minima? Quo in voluptatem nam accusamus voluptate pariatur a. At consequatur iste repellat dicta cupiditate incidunt consequuntur. Excepturi? Esse doloribus quis quia, distinctio commodi molestiae adipisci nam ipsum culpa!"], ["3: Do you have a quarantee?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores corporis illo minima? Quo in voluptatem nam accusamus voluptate pariatur a. At consequatur iste repellat dicta cupiditate incidunt consequuntur. Excepturi?"], ["4: Where are you at?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores corporis illo minima?"], ["5: Little space!", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae asperiores corporis illo minima? Quo in voluptatem nam accusamus voluptate pariatur a. At consequatur iste repellat dicta cupiditate incidunt consequuntur. Excepturi? Esse doloribus quis quia, distinctio commodi molestiae adipisci nam ipsum culpa! Tempora maiores, cupiditate deleniti deserunt itaque dignissimos molestiae voluptatibus dicta, quibusdam nemo atque dolorum mollitia quod aperiam odit? Commodi"]];
export default function Faq() {
    return (
        <>
        <h3>FAQ</h3>
        <section  className="faq_list">
        <ul>
            {
                arr.map((elem, i) => {
                    return (
                        <OpenedList question={elem[0]} text={elem[1]} />
                    )
                })
            }
        </ul>
        </section>
        </>
    )
}

function OpenedList(props) {
    let [opened, setOpen] = useState(true);
    function open(e) {
        return opened ? setOpen(false) : setOpen(true);
    }
    return (
        <li onClick={open}>
            <h4>{props.question}</h4>
            <p hidden={opened}>{props.text}</p>
        </li>
    )
}