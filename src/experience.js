import React, { useState } from 'react';


const list = [
    {
        'id': 0,
        'label': 'Pathways to AI',
        'role': 'ML Intern',
        'location': 'NYU Courant',
        'blurb': ['Developed computer vision, language, and regression models from the ground up using TensorFlow, numpy, and scikit-learn.',
        'Collaborated on foundational projects in reinforcement learning, computer vision, and distributed systems under the guidance of faculty members.',
        'Successfully undertook a 4-week immersive curriculum encompassing computational mathematics, machine learning theory, and popular frameworks.']
    },
    {
        'id': 1,
        'label':'Harvard Data Analytics',
        'role':'Data Team Lead',
        'location':'HDAG',
        'blurb':['Developed several Bayesian models in Python to predict energy prices for a large aerospace corporation.',
            'Contributed models to an open-source sustainability initiative backed by companies totaling over 400 billion dollars in annual revenue.',
            'Employed web scraping and cutting-edge NLP techniques to deliver competitor insights to a leading biotech company.',
            'Deployed an automated dashboard using Python and Firebase to display real-time metrics on 15+ competitors.']
    },
    {
        'id': 2,
        'label': 'Harvard Medical School',
        'role': 'Researcher',
        'location': 'Harvard Med',
        'blurb': ['Uncovered novel relationships between aging, smoking, and gene expression in the human heart through analysis of single-cell RNA sequencing data on R.',
            'Contributed results of analysis to projects which will be published in 2+ academic papers.',
            'Organized a computational biology workshop for the lab covering the command line, R basics, and Seurat.']
    },
    {
        'id': 3,
        'label': 'Arda Impact',
        'role': 'Founding Developer',
        'location': 'Arda',
        'blurb': ['Co-developed app for start-up aiming to improve vaccine access in The Gambia by up to 90 times through drone deliveries.',
            'Conceptualized and crafted detailed app screen mock-ups using Figma, capturing the essence of the user experience.',
            'Developed app screens and navigation using Java within Android Studio.',
            'Integrated Mapbox API, enhancing the app\'s functionality by showcasing real-time drone location and delivery routes.']
    }
];

function Experience() {
    const [cur, setCur] = useState(0);

    return (
      <div className='title m-auto mt-16 flex flex-row justify-center'>
        <div className='font-bold flex flex-col justify-start ml-8 sm:ml-0 mb-4 sm:mb-0 w-48 sm:w-64 md:w-80'>
          <div className="h-32 flex flex-col justify-end mb-8">
            <div className='text-right text-3xl sm:text-4xl md:text-5xl'>Experience:</div>
          </div>
          <ul>
            {list.map(item => {
                return item.id === cur ? <li onClick={()=>setCur(item.id)} className='bg-beige-700 text-beige-100 transition ease-in-out rounded-lg text-md sm:text-lg md:text-xl mb-8 p-3'>{item.label}</li> :
                <li onClick={()=>setCur(item.id)} className='bg-beige-400 hover:bg-beige-700 text-beige-700 hover:text-beige-100 transition ease-in-out rounded-lg text-md sm:text-lg md:text-xl mb-8 p-3'>{item.label}</li>;
            })}
          </ul>
        </div>
        <div className='flex flex-col justify-start w-11/12 sm:w-2/3 ml-8'>
          <div className='h-32 flex flex-col justify-end mb-8'>
            <div className='text-2xl sm:text-3xl md:text-4xl transition-opacity ease-in duration-700'><span className='font-bold'>{list[cur].role}</span> @ {list[cur].location}</div>
          </div>
          <div className='text-md sm:text-lg md:text-xl'>
            {list[cur].blurb.map(item => {
                return (
                    <div>
                        <p>{item}</p>
                        <br />
                    </div>
                );
            })}
          </div>
        </div>
      </div>
    );
}

export default Experience;