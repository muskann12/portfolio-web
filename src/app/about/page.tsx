'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const AboutPage = () => {
  const [isCertificateVisible, setCertificateVisible] = useState(false);

  const toggleCertificate = () => {
    setCertificateVisible(!isCertificateVisible);
  };

  return (
    <div className="flex flex-col md:flex-row p-8">
      {/* Left Section: About Me */}
      <div className="flex-1 mb-8 md:mb-0 md:mr-8">
        <h1 className="text-5xl font-mono text-gradient text-pink-100 ">ABOUT ME:</h1>
        
        <section className="mt-6 text-gray-300">
          <h2 className="text-2xl font-bold text-pink-100 underline">INTRODUCTION:</h2>
          <p className="mb-4 font-semibold">
            “Hi, I’m Muskan Nisar, a passionate and driven front-end developer and certified IT support specialist. I love building dynamic and user-friendly websites, combining creativity with technical expertise to create seamless online experiences.”
          </p>

          <h2 className="text-2xl font-bold text-pink-100 underline">MY JOURNEY:</h2>
          <p className='font-semibold mb-4 '>
            “I began my journey in tech with a curiosity for how things work behind the scenes, which quickly grew into a passion for web development and automation. Over the past year, I’ve been on an exciting learning path, mastering new technologies and continuously pushing my boundaries.”
          </p>

          <h2 className="text-2xl font-bold text-pink-100 underline">EDUCATION:</h2>
          <p className="mb-4 font-semibold">
            “I completed my Matric in Computer Science in May 2023, and I’m currently in the second year of my Intermediate studies. As part of my growth, I’m learning a wide array of technologies, including TypeScript, JavaScript, Python, HTML, CSS, Next.js, Node.js, and Tailwind CSS.”
          </p>

          <h2 className="text-2xl font-bold text-pink-100 underline">FRONT-END DEVELOPMENT:</h2>
          <p className="mb-4 font-semibold">
            “My front-end development journey began with a focus on creating intuitive, user-friendly websites. I’ve built projects using Next.js, Tailwind CSS, and TypeScript, which has given me hands-on experience in building responsive, interactive web applications. Through platforms like GitHub and live projects, I’ve honed my skills and am now working towards becoming a Generative AI Engineer.”
          </p>

          {/* Certifications Section */}
          <h2 className="text-2xl font-bold mt-4 text-pink-100 underline">CERTIFICATIONS
                                                                      :</h2>
          <p className="mb-4 font-semibold">
            “I’m proud to be certified in Google IT Automation with Python, a course that strengthened my foundation in:
          </p>
          <ul className="list-disc list-inside ml-5 mb-4 font-semibold">
            <li>Python programming for automation.</li>
            <li>IT support processes and troubleshooting.</li>
            <li>Version control with Git.</li>
          </ul>
          <p className='font-extralight'>This certification has enabled me to automate repetitive tasks, optimize workflows, and troubleshoot IT issues efficiently.”
          </p>
          
          {/* Button to Show Certificate */}
          <button 
            onClick={toggleCertificate} 
            className="mt-4 px-4 py-2 bg-pink-600 text-slate-200 rounded hover:bg-pink-900 transition">
            {isCertificateVisible ? 'Hide Certificate' : 'View Certificate'}
          </button>

          {/* Certificate Display */}
          {isCertificateVisible && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-300"> Certificate:</h3>
              <Image 
                src="/images/it.jpg" // Update with your certificate image path
                alt="Certificate"
                className="mt-2 rounded"
                width={600}
                height={400}
              />
            </div>
          )}
        </section>
      </div>

      {/* Right Section: Your Picture */}
      <div className="flex-1 flex justify-center items-start md:items-center">
        <Image
          src="/images/girl.jpeg" // Update with your image path
          alt="Your Name"
          className="rounded-full w-3/4 mb-8" // Adjust size as needed
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default AboutPage;
