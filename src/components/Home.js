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
                    <p>Hello from home</p>
                </>
            } />
        )
    }
}

export default Home
