import React from 'react'
import { heroImg } from '../../assets/assets';
import './About.css'

const About = () => {
  return (
    <div id='About' className='w-full h-auto flex flex-col items-center gap-6 mt-10 px-4 sm:px-8 lg:px-16'>
      <h1 className='text-3xl sm:text-4xl md:text-[2.5vw] font-semibold text-center mb-10'>ABOUT ME</h1>
      <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16'>
        <img className='abtImg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 object-cover' src={heroImg} alt="Hero Image" />
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Summary</h1>
          <p className='text-base sm:text-lg md:text-xl'>
            As a software developer and frontend specialist, I have expertise in creating user-friendly interfaces and engaging web applications. My technical skills include HTML, CSS, JavaScript, React.js, Tailwind, GSAP, Node.js, Express.js, C, Java, and Python. I completed my BCA degree in 2024 with a CGPA of 8.1.
          </p>
          <div className='flex flex-col gap-2'>
            <p className='text-lg sm:text-xl font-semibold'>Key projects in my portfolio:</p>
            <ul className='list-disc ml-5 text-base sm:text-lg'>
              <li>Food Delivery App (Frontend, React.js)</li>
              <li>Real-time Weather App (React.js, OpenWeather API)</li>
              <li>Music Player (HTML, CSS, JavaScript)</li>
              <li>Animated E-commerce Landing Page (HTML, CSS, JavaScript, GSAP)</li>
            </ul>
          </div>
          <p className='text-base sm:text-lg'>
            I have won two intra-college coding events, placed in the top four of an inter-college coding competition, and actively contribute to organizing inter-college coding events.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
