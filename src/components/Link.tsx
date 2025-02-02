import React, {AnchorHTMLAttributes, DetailedHTMLProps} from "react";
import {Link, LinkProps} from "react-router-dom";

export type LinkType = "text"|"icon";

interface InternalLinkProps extends LinkProps {
    type?: LinkType
}

interface ExternalLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    type?: LinkType
}

export const ExternalLink = (props: ExternalLinkProps) => {
    const {className, type, children, ...rest} = props;

    return (
        <a {...rest} target="_blank" rel="noopener noreferrer" className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors select-none ${type === "text" && "underline"} ${className}`}>
            {children}
        </a>
    )
}

export const InternalLink = (props: InternalLinkProps) => {
    const {className, type, children, ...rest} = props

    return (<>
        <Link {...rest} className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors select-none ${type === "text" && "underline"} ${className}`}>
            {children}
        </Link>
    </>)
}