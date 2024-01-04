import React from 'react';

function Project({ data }) {
    return (
          <div className='flex flex-col md:flex-row justify-start w-full mb-16'>
            <div className='flex flex-col justify-center'>
                <a href={ data.links[0][1] } target='_blank' rel='noreferrer'><img src={ data.img } alt={ data.title } className='bg-white w-64 h-min md:w-96 mb-8 md:mb-0 rounded-xl shadow-sm hover:scale-105 hover:shadow-md transition'></img></a>
            </div>
            <div className='flex flex-col justify-center w-full md:w-2/3 pl-0 md:pl-16'>
                <div className='font-bold text-2xl sm:text-3xl md:text-4xl mb-4'>{data.title}</div>
                <div className='flex flex-wrap'>
                {
                    data.tools.map(item => {
                        return <div className="rounded-full bg-beige-400 hover:bg-beige-700 transition text-beige-100 text-center text-md sm:text-lg md:text-xl shadow-sm mr-2 px-4 mb-4">{item}</div>
                    })
                }
                </div>
                <div className='text-md sm:text-lg md:text-xl mb-4'>{data.blurb}</div>
                <div className='text-md sm:text-lg md:text-xl'>
                <b>Links:</b> {data.links.map((item, index) => {
                    return (<a className='text-beige-700 transition hover:text-beige-900' href={item[1]} target='_blank' rel='noreferrer'><span className='underline'>{item[0]}</span>{index !== data.links.length-1 ? ', ' : ''}</a>)
                })}
                </div>
            </div>
          </div>
    );
}

export default Project;