import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails, getCurrentYear } from "../config/personalDetails";

export default function Footer() {
    return (
        <footer className="bg-white bg-opacity-90 text-gray-800 py-4 shadow-md z-10">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
                <p>&copy; {getCurrentYear()} {personalDetails.name}. All rights reserved.</p>
                <nav className="flex space-x-4 mt-4 lg:mt-0">
                    <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </nav>
            </div>
        </footer>
    );
}