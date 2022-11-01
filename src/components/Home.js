import React from "react";
import Template from './Template'

const position = "pos-center";
const Home = () => {
    return (
        <Template title={"Home"} content ={
            <>
                <p>Hello! My name is</p>
                <p id={"name-large"}>Steven Muirhead</p>
                <p id={"job-title"}>Fourth Year Computer and Electronic Systems | University of Strathclyde</p>
                <p>Welcome to my portfolio website, here you can find information about me and some of the projects I have been involved in.</p>
            </>
        } />
    )
}

export default Home
