import React, {Component} from 'react'
import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
const HOME = "/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <>
                {/*Title*/}
                <div id={"site-title"} >
                    <Link to={"."+HOME} id={"home-link"}>
                        <h1>Steven Muirhead</h1>
                    </Link>
                </div>
                {/*Nav Bar*/}
                <Nav parent={this} />
                {/*Page Content*/}
                <div id={"main-div"} onClick={() => {if (this.state.visible) this.setVisible(false)}}>
                    <Routes>
                        <Route exact path={HOME} element={<Home/>} />
                        <Route exact path={HOME+"portfolio"} element={<Portfolio/>} />
                        <Route exact path={HOME+"contact"} element={<Contact/>} />
                    </Routes>
                </div>
                {/*Footer Content*/}
                <div id={"footer"} >
                    <p>This is some footer content</p>
                </div>
            </>
        )
    }

    setVisible = (newState) => {
        this.setState ( {
            visible: newState
        });
    }

    invertVisible = () => {
        this.setVisible(!this.state.visible);
    }
}

const Nav = (props) => {
    let parent = props.parent;
    let invertVisible = parent.invertVisible;
    if (parent.state.visible) {
        return (
            <div id="nav-bar" className={"nav"}>
                <div id={"nav-container"}>
                    <button id={"hamburger"} onClick={invertVisible}>≡</button>
                    <div id={"nav-buttons"}>
                        <LinkButton onClick={invertVisible} name={""} displayName={"Home"}/>
                        <LinkButton onClick={invertVisible} name={"portfolio"} displayName={"My Work"}/>
                        <LinkButton onClick={invertVisible} name={"contact"} displayName={"Contact"}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id={"nav-bar-off"} className={"nav"}>
                <button id={"hamburger"} onClick={invertVisible}>≡</button>
            </div>
        )
    }
}

const LinkButton = (props) => {
    return (
        <Link to={"."+HOME+props.name}>
            <button className={"buttonLink"} onClick={props.onClick}>
                {props.displayName}
            </button>
        </Link>

    )
}

export default App;
