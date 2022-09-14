import React from "react";
import Template from './Template'
import ExternalLink from './ExternalLink'
import './../styles/contact.css'
import Item from "./Item";

const position = "pos-center";
const Contact = () => {
        return (
            <Template title={<h1>Home</h1>} content ={
                <>
                    <div id={"work-container"}>
                        <Item title={"Methods of Contact"} pos={position} content={<>
                            <p>
                                If you wish to contact me about work or internship opportunities, please do not hesitate to contact me via LinkedIn
                            </p>
                        </>}/>
                        <Item title={"LinkedIn"} pos={position} content={<>
                            <p>My LinkedIn contains in depth information about my education, skills, modules, test-scores etc. It is also the best way of getting in contact with me  </p>
                            <br/>
                            <p className={"logo-link"}>
                                <ExternalLink href="https://www.linkedin.com/in/stevenmuirhead/" content={<><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo"/> My Profile</>}/>
                            </p>
                        </>}/>
                        <Item title={"GitHub"} pos={position} content={<>
                            <p>
                                Whilst a significant number of my projects are hosted on my universities GitLab instance, some projects, including the react code for this website can be found at:
                            </p>
                            <br/>
                            <p className={"logo-link"}>
                                <ExternalLink href="https://github.com/naeayedea" content={<><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo"/> https://github.com/naeayedea</>}/>
                            </p>
                        </>}/>
                    </div>
                </>
            } />
        )
}

export default Contact
