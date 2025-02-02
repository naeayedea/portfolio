import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails, getCurrentYear } from '../config/personalDetails';
import { ExternalLink } from "./Link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 bg-opacity-90 text-gray-800 dark:text-white py-4 shadow-md z-10">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                <p>&copy; {getCurrentYear()} {personalDetails.name}. All rights reserved.</p>
                <nav className="flex space-x-4 mt-4 lg:mt-0">
                    <ExternalLink href={personalDetails.github} aria-label="GitHub">
                        <Github className="w-6 h-6" />
                    </ExternalLink>
                    <ExternalLink href={personalDetails.linkedin} aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                    </ExternalLink>
                </nav>
            </div>
        </footer>
    );
}