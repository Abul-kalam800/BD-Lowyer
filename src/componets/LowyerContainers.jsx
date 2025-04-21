 import React from 'react';
import { useLoaderData } from 'react-router';
import Lowyer from './Lowyer';
 
 const LowyerContainers = () => {
    // data 
    const data = useLoaderData()
    
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
            <h1 className='text-5xl w-4/12 mx-auto mt-14 font-bold'>Our best lawyers</h1>
            <p className='text-center pt-12 w-[80%] mx-auto text-lg'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-8 my-16'>

            {
                data.map((lowyer)=> <Lowyer key={lowyer.id} lowyer={lowyer}></Lowyer>)
            }
          </div>

        </div>
    );
 };
 
 export default LowyerContainers;