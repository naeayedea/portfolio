import React from "react";
import {Link} from "react-router-dom";

const HOME = "/";

const Template = (props) => {
    return (
        <div id={"top-view"}>
            <div id={"top-banner"}>
                <div id={"banner-left"}>
                        <div id={"site-image"}>
                            <Link to={"" + HOME} id={"home-link"}>
                                <img src="https://avatars.githubusercontent.com/u/70326670" alt=""/>
                            </Link>
                        </div>
                    <Link to={"." + HOME} id={"home-link"}>
                        <div id={"site-title"}>
                            <h1>Steven Muirhead</h1>
                        </div>
                    </Link>
                </div>


                <Nav parent={this} select={props.title}/>
            </div>
            <div id={"main-div"}>
                {/*Content of the page passed through by props */}
                {props.content}
            </div>
        </div>
    );
}

const Nav = (props) => {
    return (
        <div id="nav-bar" className={"nav"}>
            <div id={"nav-buttons"}>
                <LinkButton class={props.select === "Home" ? "selected" : ""} name={""} displayName={"Home"}/>
                <LinkButton class={props.select === "About" ? "selected" : ""} name={"About"} displayName={"About"}/>
                <LinkButton class={props.select === "Contact" ? "selected" : ""} name={"contact"}
                            displayName={"Contact"}/>
                <LinkButton class={props.select === "Portfolio" ? "selected emphasis" : "emphasis"} name={"work"}
                            displayName={"Portfolio"}/>
            </div>
        </div>
    )
}

const LinkButton = (props) => {
    return (
        <Link to={HOME + props.name}>
            <button className={"buttonLink" + (props.class ? " " + props.class : "")} onClick={props.onClick}>
                <h1 id={"buttonLink" + props.displayName}>
                    {props.displayName}
                </h1>
            </button>
        </Link>

    )
}
export default Template;
