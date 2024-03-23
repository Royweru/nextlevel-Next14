"use client"
import React, { useEffect, useState } from 'react';

export const WelcomeHero: React.FC = () => {
    const [text, setText] = useState<string>(''); // State to hold the text being written

    useEffect(() => {
        // Real-time text writing simulation
        const originalText = " Welcome to NEXT LEVEL ACADEMY! We're thrilled to have you join our community dedicated to elevating coding skills in Next.js, HTML, and CSS. Whether you're a seasoned developer looking to refine your expertise or a beginner eager to dive into the world of web development, you've come to the right place. reason why you should work with us we are a code school that offers top notch education and skills";
        let index = 0;
        const interval = setInterval(() => {
            setText(originalText.slice(0, index));
            index++;
            if (index > originalText.length) {
                index = 0;
            }
        }, 150);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative h-[600px]">
            {/* Video Background */}
            <video className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-70" autoPlay loop muted>
                {/* Add your video source here */}
                <source src="/videos/welcome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white">
                <h1 className="text-2xl font-semibold mb-4 text-rose-300 italic ">
                 </h1>
                <div className="text-lg font-medium mb-8">{text}</div>
            </div>
        </div>
    );
};



