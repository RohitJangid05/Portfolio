import React, { useRef, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const container = useRef(null);

    useEffect(() => {
        const skills = [
            { class: ".html", width: "95%" },
            { class: ".css", width: "87%" },
            { class: ".tailwind", width: "77%" },
            { class: ".javascript", width: "75%" },
            { class: ".react", width: "65%" },
            { class: ".node", width: "60%" },
            { class: ".java", width: "40%" },
            { class: ".python", width: "70%" }
        ];

        skills.forEach(skill => {
            gsap.fromTo(skill.class, {
                width: "0%",
            }, {
                width: skill.width,
                duration: 3,
                scrollTrigger: {
                    trigger: skill.class,
                    scroller: "body",
                    start: "top 110%",
                    end: "120%",
                    toggleActions: "restart none none none",
                    onEnter: () => {
                        gsap.to(skill.class, {
                            width: "0%",
                            duration: 0.1,
                        });
                    },
                    onLeave: () => {
                        gsap.to(skill.class, {
                            width: skill.width,
                            duration: 0.1,
                        });
                    }
                },
            });
        });
    }, []);

    return (
        <div id='Skills' className='flex flex-col justify-center items-center gap-10 p-4'>
            <h1 className='text-3xl sm:text-4xl md:text-[2.5vw] font-semibold text-center'>SKILLS</h1>
            <div className="about w-full flex flex-col gap-6" ref={container}>
                {[
                    { icon: <FaHtml5 />, label: "HTML", class: "html" },
                    { icon: <FaCss3Alt />, label: "CSS", class: "css" },
                    { icon: <IoLogoJavascript />, label: "JAVASCRIPT", class: "javascript" },
                    { icon: <SiTailwindcss />, label: "TAILWIND", class: "tailwind" },
                    { icon: <FaReact />, label: "REACT", class: "react" },
                    { icon: <FaNodeJs />, label: "NODE JS", class: "node" },
                    { icon: <FaPython />, label: "PYTHON", class: "python" },
                    { icon: <FaJava />, label: "JAVA", class: "java" }
                ].map(({ icon, label, class: skillClass }) => (
                    <div className="w-full flex items-center gap-4 aboutSkill" key={skillClass}>
                        <span className='flex text-3xl'>{icon}</span>
                        {/* Hide label on mobile screens */}
                        <p className='text-xl hidden sm:block'>{label}</p>
                        <hr className={`${skillClass} h-2 flex border-0`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
