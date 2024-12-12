'use client';
import React from 'react';

const AboutMobile: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-[#1A1A1A] text-white font-retro p-5">
      <div className="flex flex-col space-y-5">
        <div>
          <h2 className="text-white text-[24px] font-custom">About Me:</h2>
          <p className="text-white text-[18px] font-custom">
            Hi, I’m Tim! A web developer with a passion for crafting clean, efficient, and visually engaging digital experiences. 
            With a tech stack that spans both front-end and back-end technologies, I thrive on turning creative ideas into functional, 
            user-friendly web applications.
            <br />
            My journey into web development began with a love for retro gaming—drawing inspiration from the pixel-perfect artistry of the 
            8-bit and 16-bit eras. Whether it’s designing intuitive user interfaces or solving complex coding puzzles, I bring the same 
            energy and focus to every project as I do to mastering the final boss in my favorite games.
          </p>
        </div>
        
        {/* Tech Stack */}
        <div>
          <h2 className="text-white text-[24px] font-custom">Tech Stack:</h2>
          <p className="text-white text-[18px] font-custom">
            Here are some of the tools and technologies I’ve leveled up with:
            <br />
            <strong>Frontend:</strong> HTML, CSS (SASS/SCSS), JavaScript (ES6+), React, TailwindCSS
            <br />
            <strong>Backend:</strong> Node.js, Express.js, MongoDB, SQL
            <br />
            <strong>Other Tools:</strong> Git/GitHub, Webpack, Figma, Adobe Photoshop
          </p>
        </div>
        
        {/* Work History */}
        <div>
          <h2 className="text-white text-[24px] font-custom">Work History:</h2>
          <p className="text-white text-[18px] font-custom">
            <strong>[Most Recent Role]</strong> – Web Developer, [Company Name]
            <br />
            Developed responsive and accessible websites for clients across diverse industries.
            <br />
            Integrated APIs to create seamless user experiences.
            <br />
            Collaborated with cross-functional teams to deliver projects on time and within budget.
            <br />
            <strong>[Previous Role]</strong> – Junior Front-End Developer, [Company Name]
            <br />
            Built interactive features and optimized web applications for performance.
            <br />
            Worked closely with designers to translate Figma mockups into pixel-perfect code.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-5 mt-10">
        <div className="w-full bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm flex justify-center items-center p-5">
          <div className="text-white text-[18px] font-custom">View GitHub</div>
        </div>
        <div className="w-full bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm flex justify-center items-center p-5">
          <div className="text-white text-[18px] font-custom"><a href="/">Back to Home</a></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;