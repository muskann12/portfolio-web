'use client';
import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const projects = [

    {
        title: 'Countdown Timer',
        description: 'A Simple Countdown Timer with Next.js.',
        link: 'https://github.com/muskann12/countdown-timer.git',
        image: '/images/c.jpg',
      },

 
  {
    title: 'Butterfly Website',
    description: 'A beautiful website showcasing butterfly species.',
    link: 'https://github.com/muskann12/butter-fly-website.git',
    image: '/images/tiger.png',
  },

  


  {
    title: 'Number Guessing Game',
    description: 'A Number Guessing Game made with typescript.',
    link: 'https://github.com/muskann12/02-Number-Guessing-Game.git',
    image: '/images/ts.png',
  },

  

 

  

];

const SkillsSection = () => {
    const skills = [
      { name: "HTML", level: 90, icon: <FaHtml5 /> },
      { name: "CSS", level: 85, icon: <FaCss3Alt /> },
      { name: "JavaScript", level: 75, icon: <FaJs /> },
      { name: "TypeScript", level: 80, icon: <SiTypescript /> },
      { name: "Python", level: 70, icon: <FaPython /> },
      { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss /> },
    ];
  return (
    <div className="mt-10">
      <h2 className="text-5xl font-bold text-gray-300 text-center underline">MY SKILLS:</h2>
      <div className="mt-4">
        {skills.map(skill => (
          <div key={skill.name} className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-gray-300 mr-2">{skill.icon}</span>
              <span className="text-gray-300">{skill.name}</span>
              <span className="ml-2 text-gray-300">{skill.level}%</span>
            </div>
            <div className="h-3 bg-gray-600 rounded">
              <div
                className="h-full bg-pink-300 rounded transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-gray-300 text-center underline">MY PROJECTS:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4"
              width={500}
              height={300}
            />
            <h2 className="text-xl font-semibold text-gray-300">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-600 transition">
              View Project
            </a>
          </div>
        ))}
      </div>
      <SkillsSection />
    </div>
  );
};

export default ProjectsPage;
