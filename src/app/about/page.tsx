'use client';
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      {/* Left Section: About Me */}
      <div className="flex-1 mb-8 md:mb-0 md:mr-8">
        <h1 className="text-5xl font-mono text-gradient text-pink-100 ">ABOUT ME:</h1>
        
        <section className="mt-6 text-gray-300">
          <h2 className="text-2xl font-bold text-pink-100 underline">INTRODUCTION:</h2>
          <p className="mb-4 font-semibold">
            “Hi, I’m Muskan Nisar, a passionate front-end developer, certified IT support specialist, certified UI/UX designer, and a student leader. I love building dynamic and user-friendly websites, blending creativity with technical expertise to create seamless online experiences that engage users and enhance usability.”
          </p>

          <h2 className="text-2xl font-bold text-pink-100 underline">MY JOURNEY:</h2>
          <p className="font-semibold mb-4">
            “My journey in tech started with a curiosity for the backend processes of websites, which quickly grew into a passion for web development and design. After obtaining my IT Automation certification with Python, I expanded my expertise to UI/UX design, enhancing my ability to create visually appealing and user-centered designs. Over the past year, I’ve been dedicated to mastering front-end and design technologies, pushing my boundaries and continually learning.”
          </p>

          <h2 className="text-2xl font-bold text-pink-100 underline">EDUCATION:</h2>
          <p className="mb-4 font-semibold">
            “I completed my Matric in Computer Science in May 2023, and I’m currently in the second year of my Intermediate studies. My technical foundation in HTML, CSS, and other technologies was built through GIAIC, where I gained hands-on skills that allowed me to dive deeper into front-end development.”
          </p>

          <h2 className="text-2xl font-bold text-pink-100 underline">FRONT-END & UI/UX DEVELOPMENT:</h2>
          <p className="mb-4 font-semibold">
            “My front-end journey began with a focus on creating intuitive, user-friendly websites, using Next.js, Tailwind CSS, and TypeScript. As I progressed, I realized the importance of UI/UX in shaping user interactions and undertook a UI/UX certification to deepen my skills. Now, I apply this knowledge in building responsive, interactive, and user-centered applications. I’m also actively working toward becoming a Generative AI Engineer, adding a new layer of innovation to my work.”
          </p>

          <h2 className="text-2xl font-bold text-pink-100 underline">EXPERIENCE:</h2>
          <p className="mb-4 font-semibold">
            “As a student leader at GIAIC, I’ve taken on the role of supporting and mentoring my peers. Whether it's assisting them with tech queries or guiding them in projects, I’m always eager to help others succeed. This experience has strengthened my leadership and communication skills, which I apply not only in my studies but also in collaborative projects.”
          </p>

          {/* Certifications Section */}
          <h2 className="text-2xl font-bold mt-4 text-pink-100 underline">CERTIFICATIONS:</h2>
          <p className="mb-4 font-semibold">
            “I’m proud to be certified in both Google IT Automation with Python and UI/UX Design. These certifications strengthened my foundation in:
          </p>
          <ul className="list-disc list-inside ml-5 mb-4 font-semibold">
            <li>Python programming for automation.</li>
            <li>IT support processes and troubleshooting.</li>
            <li>Version control with Git.</li>
            <li>Creating user-centered and aesthetically pleasing UI/UX designs.</li>
          </ul>
          <p className="font-extralight">
            With these certifications, I can automate repetitive tasks, troubleshoot IT issues, and design engaging, user-focused interfaces that ensure a positive experience. Each skill set complements my development journey, equipping me to deliver high-quality, efficient, and user-centric solutions.”
          </p>
        </section>
      </div>

      {/* Right Section: Your Picture */}
      <div className="flex-1 flex justify-center items-start md:items-center">
        <Image
          src="/images/girl.jpeg" // Update with your image path
          alt="Muskan Nisar"
          className="rounded-full w-3/4 mb-8" // Adjust size as needed
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default AboutPage;
