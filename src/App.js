import React from 'react';
import './App.css';

import Experience from './experience.js';
import ProjectSection from './project-section.js';
import Header from './header.js';
import About from './about.js';
import Footer from './footer.js';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  setVisible(entry.isIntersecting);
              }
          });
      });
      const { current } = domRef;
      observer.observe(current);
      return () => observer.unobserve(current);
  }, []);
  return (
      <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
      >
          {props.children}
      </div>
  );
}

function App() {
  return (
    <div className='flex flex-col px-8 py-8 m-auto max-w-screen-lg'>
      <Header />
      <div className='min-h-[60vh] flex flex-col justify-center'>
        <FadeInSection>
          <About />
        </FadeInSection>
      </div>
      
      <div className='title min-h-screen flex flex-col justify-center'>
        <FadeInSection>
          <Experience />
        </FadeInSection>
      </div>

      <FadeInSection> 
        <ProjectSection />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}

export default App;
