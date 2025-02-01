import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Image, Menu, X} from 'lucide-react';

import { ThemeToggle } from "./ThemeToggle";

import { personalDetails} from "../config/personalDetails";
import {useScreenBreakpoint} from "../hooks/useScreenBreakpoint";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAbove } = useScreenBreakpoint("xs")

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white dark:bg-gray-800 bg-opacity-90 text-gray-800 dark:text-white py-4 shadow-md z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <ImageAndTitle className={"z-50"}/>
                <ThemeToggle size={isAbove ? 20 : 16} className={isAbove ? "p-2" : "p-1"}/>
                <button
                    className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors z-50 flex-shrink"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`fixed top-0 left-0 right-0 bottom-0 bg-white dark:bg-gray-800 bg-opacity-90 z-40 transform transition-transform duration-300 ease-in-out md:static md:bg-transparent md:transform-none ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
                    <div className="container mx-auto px-4 py-4 md:py-0 max-h-screen h-screen flex flex-col md:flex-none md:h-auto">
                        <div className="flex justify-between items-center mb-8 md:hidden">
                            <ImageAndTitle className={"opacity-0"}/>
                        </div>
                        <ul className="flex flex-col flex-grow md:flex-auto md:flex-row space-y-4 md:space-y-0 md:space-x-8 overflow-y-auto h-fit lg:h-auto">
                            <li><Link to="/" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</Link></li>
                            <li><Link to="/about" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>About</Link></li>
                            <li><Link to="/skills" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Skills</Link></li>
                            <li><Link to="/projects" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={toggleMenu}>Projects</Link></li>
                        </ul>
                    </div>
                </nav>
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMenu}></div>
                )}
            </div>
        </header>
    );
}

const ImageAndTitle = ({className}: {className?: string}) => {
    return (
        <Link to="/" className={`flex items-center ${className}`}>
            <img src="https://avatars.githubusercontent.com/u/70326670" alt="Profile" className="w-6 xs:w-8 sm:w-10 aspect-square rounded-full mr-3 select-none"/>
            <span className="text-l xs:text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">{personalDetails.name}</span>
        </Link>
    )
}