import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Index from "./index.js";

import { HashRouter } from "react-router-dom";

function App() {
    return (
        <>
        <Index/>
        </>
    )
}

ReactDOM.render( <HashRouter><App /></HashRouter>, document.getElementById("root"));