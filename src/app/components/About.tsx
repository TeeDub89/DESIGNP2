import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-[#1A1A1A] text-white font-retro">
      <div className="absolute left-0 top-0 w-3/4 h-full flex flex-col justify-start p-10 space-y-10">
        <div className="flex-1">
          <h2 className="text-white text-[28px] font-custom">About Me:</h2>
          <p className="text-white text-[28px] font-custom">
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
        <div className="flex-1">
          <h2 className="text-white text-[28px] font-custom">Tech Stack:</h2>
          <p className="text-white text-[28px] font-custom">
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
        <div className="flex-1">
          <h2 className="text-white text-[28px] font-custom">Work History:</h2>
          <p className="text-white text-[28px] font-custom">
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
      
      <div className="absolute right-0 top-0 w-1/4 h-full flex flex-col items-center p-5 space-y-5">
        {/* Add photo above the buttons */}
        <Image src="/images/me.jpg" alt="Profile Photo" layout="responsive" width={200} height={200} className="rounded-full object-cover" />
        
        <div className="w-full flex-1 flex flex-col justify-end">
          <div className="w-[300px] h-[100px] right-[90px] top-[625px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
            <div className="w-36 h-[40.5px] text-white text-[28px] font-custom">View GitHub</div>
          </div>
          <div className="w-[300px] h-[100px] right-[90px] top-[750px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
            <div className="w-[161.25px] h-[43.5px] text-white text-[28px] font-custom"><a href="/">Back to Home</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;