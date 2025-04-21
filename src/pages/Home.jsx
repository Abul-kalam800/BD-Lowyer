 import React from 'react';
import Hero from '../componets/Hero';

import LowyerContainers from '../componets/LowyerContainers';
import { useLoaderData } from 'react-router';
 
 const Home = () => {

    return (
        <div className='max-w-screen-xl mx-auto'>
           <Hero></Hero>
           <LowyerContainers ></LowyerContainers>
         
        </div>
    );
 };
 
 export default Home;