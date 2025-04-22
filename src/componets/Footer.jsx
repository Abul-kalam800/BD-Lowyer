import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#0f0f0f] text-white py-14'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='flex justify-center gap-2 items-center my-5 font-bold text-3xl'>
                    <img src={logo} alt="logo" />
                    Low.BD
                </h1>
                {/* nav link  */}
                <ul className="flex flex-col md:flex-row justify-center items-center gap-6 mb-9">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/mybooking"><li>Mybooking</li></NavLink>
                    <NavLink to="/blogs"><li>Blogs</li></NavLink>
                    <NavLink to="/contactus"><li>ContactUs</li></NavLink>

                </ul>
                {/* social icon  */}
                <div className='flex justify-center items-center gap-5 py-6 border-t border-dashed'>
                    <a className='text-2xl bg-blue-600 rounded-full p-2' href="https://www.facebook.com/bd.abulkalam800/"> <FaFacebookF />
                    </a>
                    <a className='text-2xl bg-red-600 rounded-full p-2' href=""> <FaInstagram />
                    </a>
                    <a className='text-2xl bg-red-600 rounded-full p-2' href=""> <CiYoutube />
                    </a>
                    <a className='text-2xl bg-blue-300 rounded-full p-2' href=""><FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;