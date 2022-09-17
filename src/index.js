import React from "react"
import {createRoot} from "react-dom/client" 
import { BrowserRouter as Router } from "react-router-dom"
// import { ApplicationViews } from "./ApplicationViews.js"
import { Goalden } from "./components/Goalden.js"
import "./index.css"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Router>
            <Goalden />
        </Router>
    </React.StrictMode>
)