import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails, getCurrentYear } from '../config/personalDetails';
import { ExternalLink } from "./Link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 bg-opacity-90 text-gray-800 dark:text-white py-2 sm:py-3 xl:py-4 shadow-md z-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className={"text-center text-sm md:text-base"} >&copy; {getCurrentYear()} {personalDetails.name}. All rights reserved.</p>
                <nav className="flex space-x-2 md:space-x-4 ">
                    <ExternalLink href={personalDetails.github} aria-label="GitHub" className={"z-40"}>
                        <Github className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />
                    </ExternalLink>
                    <ExternalLink href={personalDetails.linkedin} aria-label="LinkedIn" className={"z-40"}>
                        <Linkedin className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />
                    </ExternalLink>
                </nav>
            </div>
        </footer>
    );
}