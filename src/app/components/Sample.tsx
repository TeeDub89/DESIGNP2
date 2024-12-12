import React from 'react';

const Sample: React.FC = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[1486px] h-[175px] pl-8 pr-[33px] py-[34px] mt-8 bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm flex justify-center items-center">
          <div className="w-[1421px] h-[130px] text-white text-[31px] font-custom text-center">
        This project is a web-based platform designed to manage a database for a quote generator. It is built using ASP.NET Core and MySQL, providing a robust and scalable solution for handling quotes. The application features an admin interface for adding and deleting quotes, as well as a public API for retrieving random quotes.
          </div>
        </div>
      </div>
      <div className="w-[1114.5px] h-[645.75px] px-[28.5px] py-[25.5px] left-[50px] top-[225px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
        <div className="w-[1087px] h-[615px] text-white text-[31px] font-custom">
          Key Features:<br/><br/>
          Admin Interface: Allows administrators to add new quotes, including author, quote text, optional link, and image upload. Administrators can also delete existing quotes.<br/><br/>
          Public API: Provides endpoints to retrieve random quotes, making it easy to integrate with other applications or websites.<br/><br/>
          Database Integration: Utilizes MySQL for storing quotes, ensuring data persistence and reliability.<br/><br/>
          Docker Support: Includes Docker configuration for easy deployment and database initialization. <br/><br/>
          Validation: Implements client-side validation using jQuery Validation Unobtrusive to ensure data integrity.
        </div>
      </div>
      <div className="w-[688.5px] h-[388.5px] px-5 py-[9.75px] right-[50px] top-[225px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
        <div className="w-[646.5px] h-[369px] text-white text-[28px] font-custom">
          Technologies Used:<br/>
          ASP.NET Core: For building the web application and API.<br/><br/>
          MySQL: For database management.<br/><br/>
          jQuery: For client-side scripting and validation. <br/><br/>
          Bootstrap: For responsive and modern UI design.<br/><br/>
          Docker: For containerization and easy deployment.
        </div>
      </div>
      <div className="w-[300px] h-[100px] right-[90px] top-[625px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
        <div className="w-[108.75px] h-[40.5px] text-white text-[28px] font-custom">View app</div>
      </div>
      <div className="w-[300px] h-[100px] right-[410px] top-[625px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
        <div className="w-36 h-[40.5px] text-white text-[28px] font-custom">View GitHub</div>
      </div>
      <div className="w-[300px] h-[100px] right-[90px] top-[750px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
        <div className="w-[161.25px] h-[43.5px] text-white text-[28px] font-custom">Back to Home</div>
      </div>
      <div className="w-[300px] h-[100px] right-[410px] top-[750px] absolute bg-[#808080]/60 shadow border-8 border-[#c8c8c8] backdrop-blur-sm justify-center items-center inline-flex">
        <div className="w-[161.25px] h-[43.5px] text-white text-[28px] font-custom">About Me</div>
      </div>
    </div>
  );
};

export default Sample;