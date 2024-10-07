import React, { useState } from 'react';

const SubscribeSection = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscribed with email:", email);
        setEmail('');
    };

    return (
        <div className="flex justify-center">
            <div 
                className="relative text-center p-10 max-w-screen-lg" // Set the width here
                style={{ 
                    backgroundImage: 'url("images/bg-letter.png")', // Update with your image URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
              <div className="bg-transparent p-8 rounded-lg shadow-lg z-10">
                    <h3 className="text-md font-bold mb-4">Subscribe now and receive weekly newsletters with educational materials, new courses,<br /> interesting posts, and much more!</h3>
                    <form onSubmit={handleSubscribe} className="flex justify-center">
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Your email here" 
                            required 
                            className="border rounded-l-md p-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-sm" // Adjust text size here
                            style={{ fontSize: '0.875rem' }} // Optional: control placeholder font size
                        />
                        <button 
                            type="submit" 
                            className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 transition text-sm" // Adjust button text size here
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;
