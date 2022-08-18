import React, {Component} from 'react'
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
const HOME = "/";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {/*Title*/}
                <div id={"top-banner"}>
                    <div id={"site-title"} >
                        <Link to={"."+HOME} id={"home-link"}>
                            <h1>Steven Muirhead</h1>
                        </Link>
                    </div>
                </div>
                {/*Nav Bar*/}
                <Nav parent={this} />
                {/*Page Content*/}
                <div id={"main-div"}>
                    <Routes>
                        <Route exact path={HOME} element={<Home/>} />
                        <Route exact path={HOME+"work"} element={<Portfolio/>} />
                        <Route exact path={HOME+"contact"} element={<Contact/>} />
                    </Routes>
                </div>
                {/*Footer Content*/}
                <div id={"footer"} >

                </div>
            </>
        )
    }

}

const Nav = () => {
    return (
        <div id="nav-bar" className={"nav"}>
            <div id={"nav-buttons"}>
                <LinkButton name={""} displayName={"Home"}/>
                <LinkButton name={"work"} displayName={"My Work"}/>
                <LinkButton name={"contact"} displayName={"Contact"}/>
            </div>
        </div>
    )
}

const LinkButton = (props) => {
    return (
        <Link to={"."+HOME+props.name}>
            <button className={"buttonLink"} onClick={props.onClick}>
                <h1>
                    {props.displayName}
                </h1>
            </button>
        </Link>

    )
}

export default App;
