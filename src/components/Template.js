import React, {Component} from "react";
import './../styles/general.css'
class Template extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("mounted")
    }

    render() {
        return (
            <>
                {/*Title text*/}
                <div id={"title"}>

                </div>
                {/*Content of the page passed through by props */}
                <div id={"content"}>
                    {this.props.content}
                </div>
            </>
        );
    }
}

export default Template;
