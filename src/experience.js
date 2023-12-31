import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const list = [
    {
        'id': 0,
        'label': 'Pathways to AI',
        'role': 'ML Intern',
        'location': 'NYU Courant',
        'date': ['Jun 2023', 'Aug 2023'],
        'blurb': ['Developed computer vision, language, and regression models from the ground up using TensorFlow, numpy, and scikit-learn.',
        'Collaborated on foundational projects in reinforcement learning, computer vision, and distributed systems under the guidance of faculty members.',
        'Successfully undertook a 4-week immersive curriculum encompassing computational mathematics, machine learning theory, and popular frameworks.']
    },
    {
        'id': 1,
        'label':'Harvard Data Analytics',
        'role':'Data Team Lead',
        'location':'HDAG',
        'date': ['Sep 2022', 'May 2023'],
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
        'date': ['Feb 2022', 'Aug 2022'],
        'blurb': ['Uncovered novel relationships between aging, smoking, and gene expression in the human heart through analysis of single-cell RNA sequencing data on R.',
            'Contributed results of analysis to projects which will be published in 2+ academic papers.',
            'Organized a computational biology workshop for the lab covering the command line, R basics, and Seurat.']
    },
    {
        'id': 3,
        'label': 'Arda Impact',
        'role': 'Founding Developer',
        'location': 'Arda',
        'date': ['Oct 2021', 'May 2022'],
        'blurb': ['Co-developed app for start-up aiming to improve vaccine access in The Gambia by up to 90 times through drone deliveries.',
            'Conceptualized and crafted detailed app screen mock-ups using Figma, capturing the essence of the user experience.',
            'Developed app screens and navigation using Java within Android Studio.',
            'Integrated Mapbox API, enhancing the app\'s functionality by showcasing real-time drone location and delivery routes.']
    }
];

function Experience() {
    const [cur, setCur] = useState(0);

    function display_blurb(blurb, isCur) {
        const classes = isCur ? 'show' : 'hide';
        return (
        <div className={classes}>
            {blurb.map(item => {
                return <div><p>{item}</p><br /></div>
            })}
        </div>
        );
    }

    function display_title(item, isCur) {
        const classes = isCur ? 'show' : 'hide';
        return (
            <div className={classes}>
                <div className='text-2xl sm:text-3xl md:text-4xl mb-4'><span className='font-bold'>{item.role}</span> @ {item.location}</div>
                <div className='text-lg sm:text-xl md:text-2xl'>{item.date[0]} - {item.date[1]}</div>
            </div>
        );
    }

    function display_menu(item, isCur) {
      const classes = isCur ? 'bg-beige-900 rounded-full h-3 w-3' : 'bg-beige-400 rounded-full h-3 w-3 group-hover:bg-beige-900 transition duration-300';
      return (
        <div onClick={() => {setCur(item.id)}} className='h-16 w-16 group flex flex-row justify-center items-center'>
          <div className={classes}></div>
        </div>
      )
    }

    function handle_browse(dir) {
      if (dir === 'left') {
        const new_cur = cur !== 0 ? cur - 1 : list.length - 1;
        setCur(new_cur);
      }
      if (dir === 'right') {
        setCur((cur + 1) % list.length);
      }
    }

    return (
      <div className='title flex flex-col md:flex-row justify-center'>
        <div className='font-bold flex flex-col justify-start w-48 sm:w-64 md:w-80'>
          <div className="flex flex-col justify-end mb-8">
            <div className='md:text-right text-2xl sm:text-3xl md:text-4xl'>Experience:</div>
          </div>
          <ul className='hidden md:flex md:flex-col'>
            {list.map(item => {
                return item.id === cur ? <li onClick={()=>setCur(item.id)} className='bg-beige-700 font-semibold text-beige-100 transition ease-in-out rounded-lg text-md sm:text-lg md:text-xl shadow-sm mb-8 p-3'>{item.label}</li> :
                <li onClick={()=>setCur(item.id)} className='bg-beige-400 font-semibold hover:bg-beige-700 text-beige-700 hover:scale-105 hover:text-beige-100 transition ease-in-out rounded-lg text-md sm:text-lg md:text-xl shadow-sm mb-8 p-3'>{item.label}</li>;
            })}
          </ul>
        </div>
        <div className='flex flex-col justify-start w-full md:w-2/3 md:ml-8'>
          <div className='flex flex-col justify-end mb-8'>
            {
            list.map(item => {
                return display_title(item, item.id === cur);
            })
            }
          </div>
          <div className='h-72 md:h-96 overflow-auto text-md sm:text-lg md:text-xl'>
            {
            list.map(item => {
                return display_blurb(item['blurb'], item.id === cur);
            })
            }
          </div>
        </div>
        <div className="md:hidden flex flex-row justify-center">
            <div className="h-16 w-16 flex flex-col justify-center items-center group">
              <FontAwesomeIcon icon={faAngleLeft} className='h-8 text-beige-700 group-hover:text-beige-900 transition duration-300' onClick={() => handle_browse('left')}/>
            </div>
            <div className='flex flex-row justify-center'>
            {
            list.map(item => {
                return display_menu(item, item.id === cur);
            })
            }
            </div>
            <div className="h-16 w-16 flex flex-col justify-center items-center group">
              <FontAwesomeIcon icon={faAngleRight} className='h-8 text-beige-700 group-hover:text-beige-900 transition duration-300' onClick={() => handle_browse('right')}/>
            </div>
        </div>
      </div>
    );
}

export default Experience;