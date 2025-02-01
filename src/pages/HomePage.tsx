import React from 'react';
import {PrimaryButton, SecondaryButton} from '../components/Button';
import { personalDetails} from "../config/personalDetails";

export default function HomePage() {
    return (
        <div className="flex items-center justify-center max-h-full h-full max-w-full">
            <section className="text-white text-center pb-4 max-w-full">
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