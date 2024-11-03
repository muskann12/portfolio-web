'use client';
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleHireMeClick = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
    <div>
      <main className="flex flex-col md:flex-row p-8">
        {/* Left Section: Your Picture */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <Image
            src="/images/girl.jpeg" // Update with your image path
            alt="Muskan Nisar"
            className="rounded-full" // Optional: makes the image circular
            width={450} // Adjust size as needed
            height={400} // Adjust size as needed
          />
        </div>

        {/* Right Section: Description and Services */}
        <div className="flex-1 md:ml-8">
          <h1 className="mt-20 md:mt-0 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-400">
            Hi! I'm Muskan Nisar
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mt-4">
            <Typewriter
              options={{
                strings: [
                  "A Passionate Front End Developer", 
                  "Certified IT Support Specialist", 
                  "Certified UI/UX Designer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <br />

          <p className="text-gray-300 text-lg md:text-xl font-light">
            “I’m driven by a passion for creating visually stunning and highly functional websites that provide seamless user experiences. With a strong focus on front-end development, I love transforming ideas into interactive, responsive designs. As a Certified IT Support Specialist and a Certified UI/UX Designer, I bring expertise in both technical troubleshooting and user-centered design, ensuring that each project is as functional as it is beautiful. I’m always eager to take on new challenges and deliver top-tier solutions that exceed expectations.”
          </p>

          <h2 className="mt-8 text-2xl md:text-3xl font-mono text-gray-300">Services:</h2>
          <ul className="mt-2 text-gray-300 list-disc list-inside text-lg md:text-xl font-medium">
            <li>Create Responsive Websites</li>
            <li>Design User-Friendly Interfaces</li>
            <li>Build Front-end Web Solutions</li>
            <li>Automate IT Support</li>
            <li>Craft Engaging UI/UX Designs</li>
          </ul>
          <br />

          {/* Hire Me Button */}
          <button
            onClick={handleHireMeClick}
            className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded hover:opacity-90 transition"
          >
            Hire Me
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
