import React from 'react';

function About() {
    return (
        <div className='title flex flex-col md:flex-row justify-center'>
          <div className='text-2xl sm:text-3xl md:text-4xl flex flex-row justify-start md:justify-end mb-4 md:mb-0 font-bold w-48 sm:w-64 md:w-80'>
            About:
          </div>
          <div className='text-md sm:text-lg md:text-xl w-full md:w-2/3 md:ml-8'>
          👋🏻 I am a junior at Harvard studying computer science + stats with a focus on machine learning. <br /><br />

          💼 Currently looking for openings in Summer 2024. I'd love to chat about opportunities related to ML, data science, and SWE. <br /><br />

          ✨ I am interested in: <br />
          - contributing to impactful projects in health, climate, and other areas. <br />
          - writing clean, readable code which caters to users and fellow programmers. <br />
          - mining large datasets for valuable insights <br />
          - using AI to automate tasks and push creative boundaries. <br /><br />
          🕺 Outside of school, I enjoy playing guitar, watching Korean dramas, dancing, and cooking (instant ramen).
          </div>
        </div>
    );
}

export default About;