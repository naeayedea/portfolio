import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const baseStyles = "px-6 py-2 rounded-full font-semibold transition duration-300";
const primaryStyles = "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700";
const secondaryStyles = "border-2 border-white dark:border-gray-300 text-white dark:text-gray-300 hover:bg-white hover:text-blue-600 dark:hover:bg-gray-700 dark:hover:text-blue-400";
const accentStyles = "bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 text-white hover:from-blue-500 hover:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-800";

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  to,
                                                  href,
                                                  onClick,
                                                  variant = 'primary',
                                                  className = '',
                                                  type = 'button'
                                              }) => {
    const getStyles = () => {
        switch (variant) {
            case 'secondary':
                return secondaryStyles;
            case 'accent':
                return accentStyles;
            default:
                return primaryStyles;
        }
    };

    const styles = `${baseStyles} ${getStyles()} ${className}`;

    if (to) {
        return <Link to={to} className={styles}>{children}</Link>;
    }

    if (href) {
        return <a href={href} className={styles}>{children}</a>;
    }

    return (
        <button onClick={onClick} className={styles} type={type}>
            {children}
        </button>
    );
};

export const PrimaryButton: React.FC<ButtonProps> = (props) => <Button {...props} variant="primary" />;
export const SecondaryButton: React.FC<ButtonProps> = (props) => <Button {...props} variant="secondary" />;
export const AccentButton: React.FC<ButtonProps> = (props) => <Button {...props} variant="accent" />;