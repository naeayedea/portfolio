import React from "react";
import Template from './Template'

const Home = () => {
    return (
        <Template title={"Home"} content ={
            <div id={"home-container"}>
                <div id={"home-view"}>
                    <p id={"welcome-text"}>Hello! My name is</p>
                    <p id={"name-large"}>Steven Muirhead</p>
                    <p id={"job-title"}>Computer and Electronic Systems | University of Strathclyde</p>
                    <br/>
                    <p id={"intro-text"}>Welcome to my portfolio website! here you can find information about me and some of the projects I have been involved in.</p>
                </div>
            </div>
        } />
    )
}

export default Home
