import React, {AnchorHTMLAttributes, DetailedHTMLProps} from "react";
import {Link, LinkProps} from "react-router-dom";


export const ExternalLink = (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
    const {className, type, children, ...rest} = props;

    return (
        <a {...rest} target="_blank" rel="noopener noreferrer" className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors select-none ${className}`}>
            {children}
        </a>
    )
}

export const InternalLink = (props: LinkProps) => {
    const {className, type, children, ...rest} = props

    return (<>
        <Link {...rest} className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors select-none ${className}`}>
            {children}
        </Link>
    </>)
}