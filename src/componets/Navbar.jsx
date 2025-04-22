import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="/mybooking"><li>Mybooking</li></NavLink>
                            <NavLink to="/blogs"><li>Blogs</li></NavLink>
                            <NavLink to="/contactus"><li>ContactUs</li></NavLink>

                        </ul>
                    </div>
                    <div className='hidden lg:flex'>
                        <img src={logo} alt="Logo" />
                        <a className="btn btn-ghost text-xl">Low.Bd</a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold flex gap-8">
                        <NavLink to="/" className={({ isActive }) => isActive ? " border-b-2" : " "}><li>Home</li> </NavLink>
                        <NavLink to="/mybooking" className={({ isActive }) => isActive ? " border-b-2" : " "}><li>Mybooking</li></NavLink>
                        <NavLink to="/blogs" className={({ isActive }) => isActive ? " border-b-2" : " "}><li>Blogs</li></NavLink>
                        <NavLink to="/contactus" className={({ isActive }) => isActive ? " border-b-2" : " "} ><li>ContactUs</li></NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn hidden md:block bg-green-400 rounded-full text-white">Contact now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;