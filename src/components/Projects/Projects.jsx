import React, { useRef, useEffect } from 'react';
import './Project.css';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { data } from '../../assets/assets';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRefs = useRef([]);
  const videoRefs = useRef([]);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // GSAP animation for project cards
    projectRefs.current.forEach((project, i) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            toggleActions: 'restart none none none',
            markers: false,
          },
        }
      );
    });

    // IntersectionObserver to auto-play videos when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each video element
    videoRefs.current.forEach((video) => observer.observe(video));

    // GSAP animation for buttons on small screens
    if (window.innerWidth < 768) {
      buttonRefs.current.forEach((button, i) => {
        gsap.fromTo(
          button,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div id="Projects" className="w-full min-h-screen flex flex-col gap-10 justify-center items-center p-5 mt-10">
      <h1 className="text-3xl sm:text-4xl md:text-[2.5vw] font-semibold text-center">PROJECTS</h1>
      <div className="animate-card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-screen-xl">
        {data.map((item, i) => (
          <div className="flex flex-col justify-center items-center gap-5" key={i}>
            <div
              ref={(el) => (projectRefs.current[i] = el)}
              className="relative project-card border-[4px] w-full h-[300px] lg:h-[400px] xl:h-[400px] rounded-2xl border-orange-400 hover:p-1"
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                muted
                className="w-full h-full object-cover rounded-xl"
                src={item.video}
                alt=""
              ></video>
              <div className="project-hover flex flex-col gap-5 justify-center items-center w-full h-full absolute top-0 left-0 rounded-xl z-10 opacity-0 lg:opacity-0 lg:hover:opacity-100">
                <Link
                  to={`/project/${item.id}`}
                  className="flex justify-center items-center gap-2 border-2 border-orange-400 rounded-full p-2 w-32 text-white text-2xl"
                >
                  View <MdOutlineArrowOutward />
                </Link>
              </div>
            </div>
            <Link
              ref={(el) => (buttonRefs.current[i] = el)}
              to={`/project/${item.id}`}
              className="flex box-shadow lg:hidden justify-center items-center gap-2 border-2 border-orange-400 rounded-full p-2 w-1/2 text-2xl"
            >
              View <MdOutlineArrowOutward />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
