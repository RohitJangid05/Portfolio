import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { rohitImg } from '../../assets/assets';
import './Home.css';

const Home = ({ isDarkMode }) => {
    useEffect(() => {
        const options = {
            strings: ["Full Stack Developer", "Frontend Developer", "React.js Developer", "Javascript Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        };

        const typed = new Typed("#text-load", options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id='Home' className='hero relative mt-20 lg:mt-5 w-full h-screen flex flex-col-reverse lg:flex-row justify-evenly gap-10 py-20 pt-6 lg:pt-8'>
            <div className="w-full lg:w-2/3 flex justify-center items-center">
                <div className='flex flex-col text-center lg:text-left px-5'>
                    <h1 className='text-4xl lg:text-6xl font-bold text-orange-400'>Hi There!</h1>
                    <p className='text-container text-3xl lg:text-5xl font-semibold text-nowrap flex items-center justify-center lg:justify-start'>
                        I am a <span id="text-load" className='ml-3 text-orange-400'></span>
                    </p>
                    <p className='text-lg lg:text-2xl mt-5'>I am a passionate web developer with experience in both front-end and back-end technologies. I specialize in creating dynamic, responsive web applications as a web developer.</p>
                    <a href="/RohitJangid.pdf" rel="noopener noreferrer" target='_blank' className={`flex justify-center items-center border-2 w-48 lg:w-60 p-2 rounded-full mt-8 relative overflow-hidden mx-auto lg:mx-0 ${isDarkMode ? 'btn-hover-dark' : 'btn-hover-light'}`}>
                        <span className='relative z-10 font-semibold'>
                            Resume
                        </span>
                    </a>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center lg:pt-10'>
                <img className='dark-shadow w-64 h-64 lg:w-96 lg:h-96 object-cover heroImg' src={rohitImg} alt="Hero image" />
            </div>
        </div>
    );
};

export default Home;
