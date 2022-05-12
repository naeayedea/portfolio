import React, {Component} from "react";
import Template from './Template'
import ExternalLink from './ExternalLink'
import './../styles/contact.css'
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
                    <div id={"personal-details"}>
                        <h3>Personal Details</h3>
                        <p>
                            If you wish to contact me about work or internship opportunities, please use the following details in order of preference:
                        </p>
                        <ul className={"simple-list"}>
                            <li key={"email"}>
                                Email -
                            </li>
                            <li key={"mobile"}>
                                Mobile -
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div id={"github"}>
                        <h3>GitHub</h3>
                        <p>
                            Whilst a significant number of my projects are hosted on my universities GitLab instance, some projects, including the react code for this website can be found at:
                        </p>
                        <p className={"logo-link"}>
                            <ExternalLink href="https://github.com/naeayedea" content={<><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo"/> https://github.com/naeayedea</>}/>
                        </p>
                    </div>
                    <br/>
                    <div id={"linkedin"}>

                    </div>
                    <br/>
                    <div id={""}>

                    </div>
                </>
            } />
        )
    }
}

export default Contact
