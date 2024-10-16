import React from 'react';
import { MdPerson } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = ({isDarkMode}) => {
    return (
        <>
            <div className='pt-10 pb-5 flex flex-col lg:flex-row justify-around items-center gap-10'>
                <div className='flex flex-col items-center lg:items-start gap-3'>
                    <h1 className='flex items-center text-xl md:text-2xl gap-3'><MdPerson />Rohit Jangid</h1>
                    <h1 className='flex items-center text-xl md:text-2xl gap-3'><IoMdMail />jangidrohit@gmail.com</h1>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-5'>
                    <div className='flex text-2xl md:text-3xl gap-3'>
                        <a rel="noopener noreferrer" target='_blank' className="hover:scale-110 transition-scale duration-300 border-2 rounded-full p-3" href="https://www.instagram.com/rohit.jangid_05/">
                        <FaInstagram />
                        </a>
                        <a rel="noopener noreferrer" target='_blank' className='hover:scale-110 transition-scale duration-300 border-2 rounded-full p-3'  href="https://github.com/RohitJangid05"><PiGithubLogoFill /></a>
                        <a rel="noopener noreferrer" target='_blank' className='hover:scale-110 transition-scale duration-300 border-2 rounded-full p-3'  href="https://www.linkedin.com/in/jangidrohit05/"><FaLinkedinIn /></a>
                    </div>
                    <p className='text-xl md:text-2xl'>Karnataka, India</p>
                </div>
            </div>
            <hr className='w-full' />
            <p className='py-5 md:py-10 text-lg md:text-xl text-center'>Designed with Love by Rohit Jangid</p>
        </>
    );
}

export default Footer;
