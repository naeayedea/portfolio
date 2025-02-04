import React from 'react';
import {Link} from 'react-router-dom';
import SkillCard from "../components/cards/SkillCard";
import {PrimaryButton} from "../components/Button";

export default function SkillsPage() {
    const skillSets = [
        {
            title: "Backend Technologies",
            skills: ["Java", "Spring", "Spring Boot", "C", "Python", "Redis"]
        },
        {
            title: "Database & Tools",
            skills: ["MySQL", "Linux", "AWS", "Kafka", "Ansible/Terraform/Packer", "Docker", "OpenAPI"]
        },
        {
            title: "Build, Versioning and Testing",
            skills: ["Git", "Gradle", "JUnit", "Mockito"]
        },
        {
            title: "Frontend Technologies",
            skills: ["JavaScript", "React", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "UX"]
        },
        {
            title: "Programming Styles and Architectures",
            skills: ["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "Event-Driven Architecture", "Model-View-Controller Architecture"]
        },
        {
            title: "Soft Skills",
            skills: ["Attention to Detail", "Communication", "Leadership", "Load Management"]
        },
    ];

    return (
        <>
            <h1 className="text-4xl font-bold text-white dark:text-gray-100 mb-2 md:mb-8">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-8">
                {skillSets.map((skillSet, index) => (
                    <SkillCard key={index} title={skillSet.title} skills={skillSet.skills}/>
                ))}
            </div>

            <PrimaryButton to={"/"} className={"inline-block mt-4"}>Back to Home</PrimaryButton>
        </>
    );
}