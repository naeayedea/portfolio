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
const primaryStyles = "bg-white text-blue-600 hover:bg-blue-100";
const secondaryStyles = "border-2 border-white text-white hover:bg-white hover:text-blue-600";
const accentStyles = "bg-gradient-to-r from-blue-500 from-40% to-purple-500 text-white hover:from-blue-600 hover:to-purple-600";

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