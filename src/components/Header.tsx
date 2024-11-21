import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { personalDetails} from "../config/personalDetails";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white bg-opacity-90 text-gray-800 py-4 shadow-md z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center z-50">
                    <img src="https://avatars.githubusercontent.com/u/70326670" alt="Profile"
                         className="w-10 h-10 rounded-full mr-3 select-none"/>
                    <span className="text-2xl font-bold text-blue-600">{personalDetails.name}</span>
                </Link>
                <button
                    className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`
          fixed top-0 left-0 bottom-0 flex flex-col w-64 bg-white bg-opacity-90 p-4 pt-24 z-40 transform transition-transform duration-300 ease-in-out
          md:static md:flex md:flex-row md:w-auto md:bg-transparent md:p-0 md:translate-x-0 md:pt-0
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
                    <Link to="/" className="py-2 px-4 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="py-2 px-4 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</Link>
                    <Link to="/skills" className="py-2 px-4 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Skills</Link>
                    <Link to="/projects" className="py-2 px-4 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Projects</Link>
                    <Link to="/contact" className="py-2 px-4 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</Link>
                </nav>
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMenu}></div>
                )}
            </div>
        </header>
    );
}