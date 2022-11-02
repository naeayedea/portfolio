import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js"
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import './styles/style.css'

const HOME = "/";

const App = () => {
        return (
            <>
                <Routes>
                    <Route exact path={HOME} element={<Home/>} />
                    <Route exact path={HOME+"about"} element={<About/>} />
                    <Route exact path={HOME+"work"} element={<Portfolio/>} />
                    <Route exact path={HOME+"contact"} element={<Contact/>} />
                </Routes>
            </>
        )
}

export default App;
