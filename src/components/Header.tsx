import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { ThemeToggle } from "./ThemeToggle";

import { personalDetails} from "../config/personalDetails";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white dark:bg-gray-800 bg-opacity-90 text-gray-800 dark:text-white py-4 shadow-md z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center z-50">
                    <img src="https://avatars.githubusercontent.com/u/70326670" alt="Profile"
                         className="w-10 h-10 rounded-full mr-3 select-none"/>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{personalDetails.name}</span>
                </Link>
                <ThemeToggle />
                <button
                    className="md:hidden ml-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`
          fixed top-0 left-0 right-0 bottom-0 bg-white dark:bg-gray-800 bg-opacity-90 z-40 transform transition-transform duration-300 ease-in-out
          md:static md:bg-transparent md:transform-none
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}
        `}>
                    <div className="container mx-auto px-4 py-4 md:py-0">
                        <div className="flex justify-between items-center mb-8 md:hidden">
                            <Link to="/" className="flex items-center" onClick={toggleMenu}>
                                <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{personalDetails.name}</span>
                            </Link>
                            <button
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
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