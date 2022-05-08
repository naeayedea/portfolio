import React, {Component} from "react";
import Template from './Template'
class Contact extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Template title={<h1>Contact</h1>} content ={
                <>
                    <p>Hello from contact</p>
                </>
            } />
        )
    }
}

export default Contact
