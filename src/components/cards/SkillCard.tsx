import React from 'react';

interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{title}</h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}