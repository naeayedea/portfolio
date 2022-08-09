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
                        <h3>Method of Contact</h3>
                        <p>
                            If you wish to contact me about work or internship opportunities, please do not hesitate to contact me via LinkedIn
                        </p>
                    </div>
                    <br/>
                    <div id={"linkedin"}>
                        <h3>
                            LinkedIn
                        </h3>
                        <p className={"logo-link"}>
                            <ExternalLink href="https://www.linkedin.com/in/stevenmuirhead/" content={<><img src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn Logo"/>https://www.linkedin.com/in/stevenmuirhead/</>}/>

                        </p>
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

                    <div id={""}>

                    </div>
                </>
            } />
        )
    }
}

export default Contact
