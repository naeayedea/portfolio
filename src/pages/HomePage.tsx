import React from 'react';
import {PrimaryButton, SecondaryButton} from '../components/Button';
import { personalDetails} from "../config/personalDetails";

export default function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
            <section className="text-white text-center max-w-2xl px-4">
                <h1 className="text-5xl font-bold mb-4">{personalDetails.name}</h1>
                <p className="text-xl mb-8">{personalDetails.description}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <PrimaryButton to="/projects">View Projects</PrimaryButton>
                    <SecondaryButton to="/about">About Me</SecondaryButton>
                    <SecondaryButton to="/contact">Contact Me</SecondaryButton>
                </div>
            </section>
        </div>
    );
}