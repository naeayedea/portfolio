import React from 'react';
import { AccentButton } from '../Button';

interface ProjectCardProps {
    title: string;
    description: string;
    details: string;
    link: string;
    thumbnail: string;
}

export default function ProjectCard({ title, description, details, link, thumbnail }: ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md flex flex-col h-full">
            <div className="mb-4 flex items-center justify-center">
                <img src={thumbnail} alt={title} className="w-full h-64 object-cover rounded-md select-none" />
            </div>
            <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                <p className="text-gray-800 dark:text-gray-200 mb-4 flex-grow">{details}</p>
                <div className="mt-auto">
                    <AccentButton to={link}>View Project</AccentButton>
                </div>
            </div>
        </div>
    );
}