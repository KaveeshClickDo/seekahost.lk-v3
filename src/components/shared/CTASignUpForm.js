'use client';

import { useState } from 'react';

export default function CTASignUpForm() {
    const [email, setEmail] = useState('');

    const handleSignup = () => {
        // Base URL for SeekAHost login/signup page
        let url = 'https://portal.seekahost.co.uk/index.php/login';
        
        // If an email is entered, you could append it as a parameter
        // (check if SeekAHost supports this parameter)
        if (email.trim()) {
            url += `?email=${encodeURIComponent(email.trim())}`;
        }
        
        // Redirect to the SeekAHost portal
        window.open(url, '_blank');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSignup();
        }
    };

    return (
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md font-medium">
            <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow outline-none text-black"
            />
            <button 
                onClick={handleSignup}
                className="bg-[#0A488A] text-white font-bold px-4 lg:px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
                <span className="max-[400px]:hidden">Sign Up Free</span>
                <span className="hidden max-[400px]:inline">Sign Up</span>
            </button>
        </div>
    );
}