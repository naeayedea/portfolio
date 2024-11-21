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
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md flex flex-col">
            <div className="mt-4 md:mt-0 flex items-center justify-center">
                <img src={thumbnail} alt={title} className="w-full h-64 object-cover rounded-md select-none" />
            </div>
            <div className="md:pr-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-gray-800 mb-4">{details}</p>
                <div className="mt-auto">
                    <AccentButton to={link}>View Project</AccentButton>
                </div>
            </div>
        </div>
    );
}