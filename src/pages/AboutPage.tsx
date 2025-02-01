import React from 'react';
import {personalDetails} from "../config/personalDetails";

export default function AboutPage() {
    return (
        <div className="overflow-y-auto">
            <h1 className="text-4xl font-bold text-white dark:text-gray-100 mb-2 md:mb-8">About Me</h1>
            <div className="bg-white dark:bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-4 md:p-8 space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Profile</h2>
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                        Hello, I'm {personalDetails.firstName}! I am a recent graduate with a Masters in Computer and
                        Electronic Systems who loves developing solutions for new and interesting problems. I have a
                        keen interest in and aptitude for software engineering and have experience with both frontend
                        and backend technologies.
                    </p>
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                        I have worked on some interesting projects including an autonomous alarm monitoring system which
                        is able to identify arbitrary sounds in the environment and notify users when detected; and an
                        automated spectrum licensing system designed to control spectrum access over a large
                        geographical area such as local authorities or countries.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className={"inline-block"}>
                        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Experience</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Graduate Software Engineer</h3>
                                <p className="text-gray-600 dark:text-gray-400">ThinkAnalytics - July 2024 ~ Present</p>
                                <p className={"dark:text-gray-100 pt-4"}>
                                    After successfully completing my degree, I joined ThinkAnalytics as a Graduate Software
                                    Engineer. My main responsibilities included integrating customer systems with TA Systems
                                    and understanding customer requirements to leverage our software stack to its full potential.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                                    <li>Spring Boot</li>
                                    <li>Customer Driven Development</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Internship -
                                    Software Engineer</h3>
                                <p className="text-gray-600 dark:text-gray-400">ThinkAnalytics - June 2023 ~ September
                                    2023</p>
                                <p className={"dark:text-gray-100 pt-4"}>
                                    This internship was my first professional experience as a developer. I spent the
                                    three months designing a chat box application using Amazon Lex to allow users
                                    to create rails in a UI using free text. I learned a significant amount during
                                    my internship at ThinkAnalytics including:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                                    <li>Spring Boot</li>
                                    <li>Amazon Lex</li>
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className={"inline-block"}>
                        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Education</h2>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                    Master of Engineering, Computer and Electronic Systems
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    University of Strathclyde, Graduated 2024
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    My degree is a combination of Electronic Engineering and Computer Science, over the
                                    five years I learned about the world of computing from the silicon layers to the highest
                                    levels of software engineering. Over time I gained an appreciation for software engineering
                                    and found myself to have a strong aptitude for creating complex systems.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                                    <li>Graduated with Distinction</li>
                                    <li>Credit Weighted Average 83.6%</li>
                                    <li>Member of Student-Staff Liaison Committee</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Secondary School</h3>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    While less relevant to my current work, I have maintained an excellent track record
                                    throughout my life, achieving AAB at Advanced Higher and AAAAB at Higher which I
                                    achieved while holding down a job at 16. I have a natural aptitude for mathematics
                                    which is reflected in my strong grades as shown below.
                                </p>
                                <h4 className="text-l font-medium text-gray-800 mt-2">Significant Grades</h4>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                                    <li>Advanced Higher Mathematics - A</li>
                                    <li>Advanced Higher Physics - A</li>
                                    <li>Higher Mathematics - A</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <section>
                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Hobbies & Interests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Badminton</h3>
                            <p className="text-gray-700 dark:text-gray-300">I am very passionate about badminton, since I was introduced to
                                it in secondary school I haven't been able to get enough. In the past I helped manage a
                                badminton club through my school which was a greatly rewarding experience. I am always
                                looking for someone to play with and take great pleasure in the sport!</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Reading</h3>
                            <p className="text-gray-700 dark:text-gray-300">I am an avid reader, having loved books from a very young age.
                                I enjoy many genres but I particularly enjoy science fiction novels such as The Forever War by Joe Haldeman
                                and the Cosmere universe from Brandon Sanderson.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Cars</h3>
                            <p className="text-gray-700  dark:text-gray-300">I also have an interest in cars, from my very first driving
                                lesson I became engrossed in them. I am not a mechanic by any stretch but I am extremely
                                interested in the way cars work, particularly in their computing systems. The highly
                                synchronous nature of cars is an interesting problem to approach computationally and the
                                way that car manufacturers handle this is fascinating.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Cooking</h3>
                            <p className="text-gray-700 dark:text-gray-300">Almost eight years as a chef gave me a love for cooking and the
                                skills to back it up, I love all kinds of foods from different cultures and love new
                                experiences.</p>
                        </div>
                    </div>
                </section>

                <section className={"mt-4"}>
                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        Get in Touch!
                    </h2>
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                        I'm always eager to learn new technologies and tackle challenging problems. Feel free to
                        reach on GitHub or LinkedIn out if you'd like to collaborate on a project or just chat about
                        technology!
                    </p>
                </section>
            </div>
        </div>
    );
}