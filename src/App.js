import FaceIcon from './face.js';
import './App.css';

function App() {
  return (
    <div className='flex flex-col px-8 py-8 m-auto max-w-screen-lg'>
      <div className='header flex flex-row justify-center'>
          <div className='face flex flex-col justify-center w-48 sm:w-64 md:w-80'>
            <FaceIcon/>
          </div>
          <div className='flex flex-col justify-center ml-8 w-2/3'>
            <div className='title font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4'>Hi, I'm Hoon Shin</div>
            <div className='subtitle text-xl sm:text-3xl md:text-4xl lg:text-5xl'>CS + Stats @ Harvard</div>
          </div>
      </div>
      <div className='about m-auto mt-16 flex flex-col sm:flex-row justify-center'>
        <div className='text-3xl sm:text-4xl md:text-5xl flex flex-row justify-start sm:justify-end ml-8 sm:ml-0 mb-4 sm:mb-0 font-bold w-48 sm:w-64 md:w-80'>
          About:
        </div>
        <div className='text-md sm:text-lg md:text-xl w-11/12 sm:w-2/3 ml-8'>
        👋🏻 I am a junior at Harvard studying computer science + stats with a focus on machine learning. <br /><br />

        💼 Currently looking for openings in Winter 2023 and Summer 2024. I'd love to chat about opportunities related to ML, data science, biology, or climate tech. <br /><br />

        ✨ I am interested in: <br />
        - developing safe and interpretable models geared towards social impact <br />
        - using ML tools to massively accelerate scientific progress <br />
        - creating AI that can rival human intelligence + adaptability
        </div>
      </div>
    </div>
  );
}

export default App;
