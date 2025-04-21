 import React from 'react';
import Hero from '../componets/Hero';

import LowyerContainers from '../componets/LowyerContainers';
import { useLoaderData } from 'react-router';
import { GiConsoleController } from 'react-icons/gi';
import Sucess from '../componets/Sucess';


 const Home = () => {
 const data = useLoaderData();

    return (
        <div className='max-w-screen-xl mx-auto'>
           <Hero></Hero>
           <LowyerContainers lowyers={data} ></LowyerContainers>
           <Sucess></Sucess>
         
        </div>
    );
 };
 
 export default Home;