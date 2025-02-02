import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import projects from "../content/data/foliodata.json"


export default function ProjectsPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-white dark:text-gray-100 mb-2 md:mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 md:gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.subTitle}
                        details={project.details}
                        link={project.path}
                        thumbnail={project.thumbnail}
                    />
                ))}
            </div>
        </div>
    );
}