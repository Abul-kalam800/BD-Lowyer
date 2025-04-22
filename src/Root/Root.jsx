import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { Outlet } from 'react-router';
import '../index.css';



const Root = () => {
    return (
        <div>
           <div  className='max-w-screen-xl mx-auto mulish px-3 lg:px-0'>
            <Navbar></Navbar>
            
           <Outlet> </Outlet>
           </div>
            <Footer></Footer>
         
        </div>
    );
};

export default Root;