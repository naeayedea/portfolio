import React from 'react';
import {Link} from 'react-router-dom';
import SkillCard from "../components/cards/SkillCard";

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
            title: "Programming Styles nad Architectures",
            skills: ["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "Event-Driven Architecture", "Model-View-Controller Architecture"]
        },
        {
            title: "Soft Skills",
            skills: ["React", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "UX"]
        },
    ];

    return (
        <>
            <h1 className="text-4xl font-bold text-white mb-8">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {skillSets.map((skillSet, index) => (
                    <SkillCard key={index} title={skillSet.title} skills={skillSet.skills}/>
                ))}
            </div>
            <Link to="/"
                  className="inline-block mt-8 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Back
                to Home</Link>
        </>
    );
}