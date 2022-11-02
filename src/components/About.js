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
                    <p><b>Please note that this site is a WIP, some image icons need to be replaced and some content added.</b></p><br/>
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
                        I am very passionate about badminton, since I was introduced to it in secondary school I haven't
                        been able to get enough. In the past I helped manage a badminton club through my school which was
                        a greatly rewarding experience. I am always looking for someone to play with and take great pleasure
                        in the sport!
                    </p>
                    <br/>
                    <p>
                        I am an avid reader, having loved books from a very young age. I enjoy many genres but I have a
                        soft spot for high-tech science fiction such as Ender's Game and more recently the Skyward series
                        by the amazing Brandon Sanderson. I am part of a book club which lets me explore genres I would
                        normally have passed over such as Verity by Colleen Hoover which was a very different but gripping
                        book.
                    </p>
                    <br/>
                    <p>
                        I also have an interest in cars, from my very first driving lesson I became engrossed in them. I
                        am not a mechanic by any stretch but I am extremely interested in the way cars work, particularly
                        in their computing systems. The highly synchronous nature of cars is an interesting problem to
                        approach computationally and the way that car manufacturers handle this is fascinating.
                    </p>
                </>}/>
                <Item title={"Education"} pos={position} content={<>
                    <h2>University of Strathclyde</h2>
                    <h2>Computer and Electronic Systems (2019 ~ 2024)</h2>
                    <br/>
                    <h2>Summary</h2>
                    <p>
                        From a young age I have been passionate about computers and the way they work, Computer and
                        Electronic Systems is the perfect combination of electrical engineering and computer science
                        that I needed to explore the world of computers.
                    </p>
                    <br/>
                    <p>
                        As I have progressed through my degree, I have decided to focus my studies on software development,
                        embedded firmware and computer security. My final year project involves creating an automated alarm
                        detection system for research labs for which I will design all aspects of the system including
                        firmware, hardware, communication protocols and security. As I continue to develop this project,
                        more details will appear on this website so that you can become more familiar with my work.
                    </p>
                    <br/><br/>
                    <h2>Secondary School</h2>
                    <p>
                        While less relevant to my current work, I have maintained an excellent track record throughout my
                        life, achieving AAB at Advanced Higher and AAAAB at Higher which I achieved while holding down a
                        job at 16.

                        I have a natural aptitude for mathematics which is reflected in my strong grades as shown below.
                    </p>
                    <br/>
                    <h2>Significant Grades</h2>
                    <p>Advanced Higher Mathematics - A</p>
                    <p>Advanced Higher Physics - A</p>
                    <p>Higher Mathematics - A</p>
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
                </>}/>
                <Item title={"Programming Languages and Tooling"} pos={position} content={<>
                    <p>
                        I am familiar with a wide range of programming languages, frameworks, architectures and styles.
                        The first language I was exposed to was Java so naturally I am very comfortable with the Java
                        ecosystem and am a very avid user of streams. I enjoy incorporating aspects of functional
                        programming into my projects and find that they greatly simplify my approaches, particularly when
                        lists are involved.
                    </p>
                    <br/>
                    <p>Some of the key languages, tools and approaches I am familiar with are listed below:</p>
                    <h2>Programming Styles and Architectures</h2>
                    <p>Object Oriented Programming</p>
                    <p>Functional Programming</p>
                    <p>Procedural Programming</p>
                    <p>Event-drive Architecture</p>
                    <p>Model-View-Controller Architecture</p>
                    <br/>
                    <h2>Languages in order of familiarity</h2>
                    <p>Java</p>
                    <p>C</p>
                    <p>JavaScript</p>
                    <p>Haskell</p>
                    <p>C++</p>
                    <p>PHP</p>
                    <br/><br/>
                    <h2>Build, Version and Testing</h2>
                    <p>Git</p>
                    <p>Gradle</p>
                    <p>JUnit</p>
                    <br/><br/>
                    <h2>Notable frameworks</h2>
                    <p>React.js</p>
                    <p>Express.js</p>

                    <br/><br/><br/>
                    <p>... to be continued</p>
                </>}/>
                <Item title={"Motivations"} pos={position} content={<>
                    <p>... to be continued</p>

                </>}/>
            </>
        } />
    )
}

export default About
