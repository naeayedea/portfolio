import React from "react";
import Template from './Template'
import ExternalLink from './ExternalLink'
import Item from "./Item";

const position = "pos-center";
const Contact = () => {
        return (
            <Template title={"Contact"} content ={
                <>
                    <div>
                        <Item title={"Methods of Contact"} pos={position} content={<>
                            <p>
                                If you wish to contact me about work or internship opportunities, please do not hesitate to contact me via LinkedIn
                            </p>
                        </>}/>
                        <Item title={"LinkedIn"} pos={position} content={<>
                            <p>My LinkedIn contains in depth information about my education, skills, modules, test-scores etc. It is also the best way of getting in contact with me  </p>
                            <br/>
                            <ContactLink href={"https://www.linkedin.com/in/stevenmuirhead/"} image={"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"} alt={"LinkedIn Logo"} content={<p>My Profile</p>} />
                        </>}/>
                        <Item title={"GitHub"} pos={position} content={<>
                            <p>
                                Whilst a significant number of my projects are hosted on my universities GitLab instance, some projects, including the react code for this website can be found at:
                            </p>
                            <br/>
                            <ContactLink href={"https://github.com/naeayedea"} image={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} alt={"GitHub logo"} content={<p>https://github.com/naeayedea</p>} />
                        </>}/>
                    </div>
                </>
            } />
        )
}

const ContactLink = (props) => {
    return (
        <div className={"logo-link"}>
            <ExternalLink href={props.href} content={<div className={"logo-link"}><img src={props.image} alt={props.alt}/><div className={"link-wrapper"}>{props.content}</div></div>}/>
        </div>
    )
}

export default Contact
