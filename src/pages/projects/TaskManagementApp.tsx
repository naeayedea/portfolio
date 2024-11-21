import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function EcommercePlatform() {
    return (
        <ProjectPage
            title="E-commerce Platform"
            description="A full-stack e-commerce solution built with React, Node.js, and MongoDB."
            headerImage="/placeholder.svg?height=400&width=800"
            carouselImages={[
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600"
            ]}
            sections={[
                {
                    title: "User Authentication",
                    content: "Implemented secure user authentication using JWT tokens and bcrypt for password hashing.",
                    image: "/placeholder.svg?height=300&width=400"
                },
                {
                    title: "Product Management",
                    content: "Developed a robust product management system with features like inventory tracking and dynamic pricing.",
                    image: "/placeholder.svg?height=300&width=400"
                },
                {
                    title: "Payment Integration",
                    content: "Integrated Stripe for secure and seamless payment processing, supporting multiple currencies.",
                    image: "/placeholder.svg?height=300&width=400"
                }
            ]}
        />
    );
}