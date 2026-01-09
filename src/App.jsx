
import React from 'react'
import TypingText from './TypingText';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${import.meta.env.BASE_URL}paper.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <div className="min-h-screen flex items-center justify-center p-10 pt-32">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <h1 className='text-6xl text-black font-bold leading-tight'>
              <TypingText text="H ello, I'm Abhijeet Senapati" speed={150} />
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Profile"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl border-4 border-black/10 transition-transform hover:scale-105 duration-300"
            />
          </div>

        </div>
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
