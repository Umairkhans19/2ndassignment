import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          WELCOME TO 
          <b> AL-FALAH EVENTS </b>
          </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed">
        Since 2000, AL-FALAH EVENTS has been dedicated to creating exceptional and unforgettable
         events. With a passion for excellence and a keen eye for detail, we transform 
         visions into reality, ensuring each event is a unique and memorable experience.
          From Weddings, Birthdays, corporate gatherings to grand celebrations,
         our commitment to quality and innovation guarantees that your special moments
         are perfectly crafted, leaving a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;