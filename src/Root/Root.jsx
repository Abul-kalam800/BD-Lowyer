import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { Outlet } from 'react-router';
import '../index.css';



const Root = () => {
    return (
        <div>
           <div  className='max-w-screen-xl mx-auto mulish'>
            <Navbar></Navbar>
            
           <Outlet> </Outlet>
           </div>
            <Footer></Footer>
         
        </div>
    );
};

export default Root;