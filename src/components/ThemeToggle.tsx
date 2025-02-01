import React from 'react';
import {Sun, Moon} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC<{className?: string, size: number}> = ({className, size}) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 ${className}`}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <Moon size={size}/> : <Sun size={size} />}
        </button>
    );
};