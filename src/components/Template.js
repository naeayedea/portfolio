import React, {Component} from "react";
import './../styles/general.css'
class Template extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div id={"main-container"}>
                    {/*Title text*/}
                    <div id={"title"}>

                    </div>
                    {/*Content of the page passed through by props */}
                    <div id={"content"}>
                        {this.props.content}
                    </div>
                </div>
            </>
        );
    }
}

export default Template;
