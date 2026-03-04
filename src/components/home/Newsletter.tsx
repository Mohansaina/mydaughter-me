'use client';

import { useState, FormEvent } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <section className="py-20 bg-primary-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-primary-200 mb-8">
                        Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections.
                    </p>

                    {subscribed ? (
                        <div className="bg-primary-700 rounded-lg p-6 text-white">
                            <svg className="w-12 h-12 mx-auto mb-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="font-medium text-lg">Thank you for subscribing!</p>
                            <p className="text-primary-200">Check your inbox for a welcome gift.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-6 py-4 rounded-md text-primary-800 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-accent-600 text-white font-medium rounded-md hover:bg-accent-700 transition-colors btn-hover"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}

                    <p className="text-primary-400 text-sm mt-4">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates.
                    </p>
                </div>
            </div>
        </section>
    );
}
