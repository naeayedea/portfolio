import React from "react";
import Template from './Template'
import {Link} from "react-router-dom"
import Item from './Item';
const position = "pos-center";


const About = () => {
    return (
        <Template title={"About"} content ={
            <>
                <Item title={"Introduction"} pos={position} content={<>
                    <p><b>Please note that this site is a WIP, content will be added over the next few weeks.</b></p><br/>
                    <p>
                        I created this website to serve as a showcase of my notable projects and work. The section
                        'My Work' contains detailed information about the things I have been involved in at
                        university as well as a selection of personal projects. The source for most projects are
                        private as they are hosted by my university. However, a closer look is available if desired.
                    </p>
                    <br/>
                    <p>
                        Please do not hesitate to <Link className={"link"} to={"./contact"}>contact</Link> me to offer work opportunities or for further information!
                    </p>
                </>}/>
                <Item title={"About Me"} pos={position} content={<>
                    <p><b>Profile</b></p>
                    <p>
                        I am a focused and driven student with a passion for software development and all things
                        computers. I am looking to broaden my horizons with respect to software development and
                        am eager to apply my knowledge in an innovative and faced-paced environment.
                    </p>
                    <br/>
                    <p><b>Hobbies and Interests</b></p>
                    <p>

                    </p>
                </>}/>
                <Item title={"Soft Skills"} pos={position} content={<>
                    <p>
                        <b>Attention to detail - </b>as a chef and particularly someone who loves cooking,
                        attention to detail is essential, and I pride myself on focusing on the smaller details
                        to ensure that I am happy with the work I produce.
                    </p>
                    <br/>
                    <p>
                        <b>Communication - </b>I have excellent written and verbal communication skills which I
                        have improved upon during my time at university.
                    </p>
                    <br/>
                    <p>
                        <b>Leadership - </b>I tend to undertake leadership roles during group work, taking the
                        initiative to ensure that we work together effectively.

                    </p>
                    <br/>
                    <p>
                        <b>Load Management - </b>during my time at university I have become accustomed to
                        balancing many tasks while maintaining a high quality of work. I have maintained a part
                        time job as a line chef since 2015 while balancing a social life and my grades, my
                        excellent track record thus far demonstrates that I am able to work under intense
                        pressure without sacrificing quality or running out of time.
                    </p>
                    <br/>
                    <p>
                        <b> - </b>

                    </p>
                    <br/>
                    <p>
                        <b> - </b>

                    </p>
                </>}/>
                <Item title={"Programming Languages and Tooling"} pos={position} content={<>
                    <p>

                    </p>
                </>}/>
                <Item title={"Education"} pos={position} content={<>
                    <p>

                    </p>
                </>}/>
                <Item title={"Motivations"} pos={position} content={<>
                    <p>

                    </p>
                </>}/>
            </>
        } />
    )
}

export default About
