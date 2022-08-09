import React, {Component} from "react";
import Template from './Template'
class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Template title={<h1>Home</h1>} content ={
                <>
                    <div>
                        <p>This website serves as a record of my notable projects and work. The section 'My Work' contains in depth information on the things I have been involved in at university and personal projects</p>
                        <p>Please do not hesitate to contact me for work opportunities or further information! </p>
                    </div>
                    <br/>
                    <div>
                        <h1>Please note this site is a WIP</h1>
                        <p>The basics are implemented, I will be adding content in the coming weeks</p>
                    </div>
                    <br/>
                    <div>
                        <h1>About Me</h1>
                        <p> </p>
                    </div>
                    <br/>
                    <div>
                        <h1>Soft Skills</h1>
                        <p> </p>
                    </div>
                    <br/>
                    <div>
                        <h1>Education</h1>
                        <p> </p>
                    </div>
                    <br/>
                    <div>
                        <h1>Motivations</h1>
                        <p> </p>
                    </div>
                </>
            } />
        )
    }
}

export default Home
