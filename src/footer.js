import React from 'react';

function Footer() {
    return (
        <>
        <div className='flex flex-col justify-start mt-32 text-beige-700 text-md sm:text-lg md:text-xl font-semibold'>
          <div className="flex flex-row justify-center">
            <div>Github</div>
            <div className='w-full flex flex-col justify-center px-4'>
              <hr className='bg-beige-700'/>
            </div>
            <a href='https://github.com/Misterhoonster' target="_blank" rel="noreferrer" className='transition hover:text-beige-900'>@misterhoonster</a>
          </div>
          <div className="flex flex-row justify-center">
            <div>LinkedIn</div>
            <div className='w-full flex flex-col justify-center px-4'>
              <hr className='bg-beige-700'/>
            </div>
            <a href='https://linkedin.com/in/hoon-shin' target="_blank" rel="noreferrer" className='transition text-nowrap hover:text-beige-900'>@hoon-shin</a>
          </div>
          <div className="flex flex-row justify-center">
            <div>Email</div>
            <div className='w-full flex flex-col justify-center px-4'>
              <hr className='bg-beige-700'/>
            </div>
            <a href='mailto:hoonshin@college.harvard.edu' target="_blank" rel="noreferrer" className='transition hover:text-beige-900'>hoonshin@college.harvard.edu</a>
          </div>
        </div>
        <div className='mt-16 font-normal text-md sm:text-lg md:text-xl text-beige-700 text-center' >designed + created by hoon shin</div>
        </>
    )
}

export default Footer;