import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="mr-0 navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-green-100 rounded-box z-1 mt-2 w-32 p-5 shadow">
                            <NavLink to="/" className={({ isActive }) => isActive ? " border-b-1" : " "}><li className='mobailNav'>Home</li></NavLink>
                            <NavLink to="/mybooking" className={({ isActive }) => isActive ? " border-b-1" : " "}><li className='mobailNav'>Mybooking</li></NavLink>
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? " border-b-1" : " "}><li className='mobailNav'>Blogs</li></NavLink>
                            <NavLink to="/contactus" className={({ isActive }) => isActive ? " border-b-1" : " "}><li className='mobailNav'>ContactUs</li></NavLink>

                        </ul>
                    </div>
                    <div className='hidden lg:flex'>
                        <img src={logo} alt="Logo" />
                        <a className="btn btn-ghost text-xl">Low.BD</a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold flex gap-8">
                        <NavLink to="/" className={({ isActive }) => isActive ? " border-b-1" : " "}><li>Home</li> </NavLink>
                        <NavLink to="/mybooking" className={({ isActive }) => isActive ? " border-b-1" : " "}><li>Mybooking</li></NavLink>
                        <NavLink to="/blogs" className={({ isActive }) => isActive ? " border-b-1" : " "}><li>Blogs</li></NavLink>
                        <NavLink to="/contactus" className={({ isActive }) => isActive ? " border-b-1" : " "} ><li>ContactUs</li></NavLink>

                    </ul>
                </div>
                <div className="navbar-end text-center">
                <div className='lg:hidden flex'>
                        <img className='w-[35px]' src={logo} alt="Logo" />
                        <a className="text-lg font-bold ">Low.BD</a>
                    </div>
                    <a className="px-6 py-2 cursor-pointer text-center hidden  lg:block bg-green-400 rounded-full text-white">Contact now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;