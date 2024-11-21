import React from 'react';
import { AccentButton } from '../components/Button';

export default function ContactPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-800 mb-1">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-800 mb-1">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-800 mb-1">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                    <AccentButton type="submit">Send Message</AccentButton>
                </form>
            </div>
        </div>
    );
}