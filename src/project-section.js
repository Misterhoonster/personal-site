import React from 'react';
import Project from './project';

import cardiac from './assets/cardiac.jpg';
import codenames from './assets/codenames.webp';
import qed from './assets/QED.png';
import track_chicago from './assets/track_chicago.png';
import personal_site from './assets/personal_site.png';
import stagemix from './assets/stagemix.png';

const projects = [
    {
        'title': 'Track Chicago',
        'tools': ['Flutter', 'Dart', 'XCode', 'Android'],
        'blurb': 'A cross-platform mobile app to streamline access to arrival times for Chicago public transit. Used by 1k+ Chicagoans with a 4.5/5 star review.',
        'img': track_chicago,
        'links': [['App Store', 'https://apps.apple.com/us/app/track-chicago/id1528651755'], ['Google Play Store', 'https://play.google.com/store/apps/details?id=com.hoonshin.track_chicago&hl=en_US&gl=US']]
    },
    {
        'title': 'Codenames Bot',
        'tools': ['Python', 'NLP'],
        'blurb': 'A bot I created to guess and generate relevant clues for Codenames. Fought valiantly against other bots to place 3rd in an online competition with a $40k prize pool.',
        'img': codenames,
        'links': [['Github', 'https://github.com/Misterhoonster/codenames-bot'], ['PlaygroundRL', 'https://playgroundrl.com/']]
    },
    {
        'title': 'Cardiac RNAseq analysis',
        'tools': ['R', 'Bash'],
        'blurb': 'A co-authored paper published in Q1 cardiology journal. My research focused on correlating smoking and aging with gene expression in the human heart.',
        'img': cardiac,
        'links': [['Github', 'https://github.com/Misterhoonster/cardiac-scRNAseq-analysis'], ['Paper', 'https://www.sciencedirect.com/science/article/pii/S002228282300055X']]
    },
    {
        'title': 'Stagemix',
        'tools': ['C#'],
        'blurb': 'A Unity2D card game where players compete to form the best idol group.',
        'img': stagemix,
        'links': [['Github', 'https://github.com/Misterhoonster/Stagemix']]
    },
    {
        'title': 'Tackling Toxicity',
        'tools': ['Python', 'Keras'],
        'blurb': 'A research project pre-dating the rise of LLMs using various RNN architectures to predict the toxicity of online comments.',
        'img': qed,
        'links': [['Github', 'https://github.com/Misterhoonster/Tackling-Toxicity']]
    },
    {
        'title': 'Personal Website',
        'tools': ['React', 'Tailwind CSS', 'Vercel'],
        'blurb': 'This website - made with care over winter break :)',
        'img': personal_site,
        'links': [['Github', 'https://github.com/Misterhoonster/personal-site']],
    }
];

function ProjectSection() {
    return (
      <div className='w-full title flex flex-col justify-start'>
        <div className='text-2xl sm:text-3xl md:text-4xl flex flex-row justify-start mb-8 font-bold'>
          Projects + Research:
        </div>
        <div className='flex flex-wrap justify-start'>
        {
            projects.map(item => {
                return <Project data={item}></Project>
            })
        }
        </div>
      </div>
    );
}

export default ProjectSection;