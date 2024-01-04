import React from 'react';
import FaceIcon from './face';

function Header() {
    return (
        <div className='header flex flex-row justify-center'>
          <div className='face flex flex-col justify-center w-48 sm:w-64 md:w-80 cursor-pointer'>
            <FaceIcon/>
          </div>
          <div className='flex flex-col justify-center ml-8 w-2/3'>
            <div className='title font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4'>Hi, I'm Hoon Shin</div>
            <div className='subtitle text-xl sm:text-3xl md:text-4xl lg:text-5xl'>CS + Stats @ Harvard</div>
          </div>
      </div>
    );
}

export default Header;