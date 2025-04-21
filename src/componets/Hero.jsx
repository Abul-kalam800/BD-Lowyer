import React from 'react';
import '../hero.css'

const Hero = () => {
  return (
    <div>
      <div className='bg w-full min-h-dvh rounded-3xl text-white'>
        <h1 className=' text-4xl  md:text-5xl font-bold text-center md:px-42 pt-42 w-full'>It avoids subjective claims or exaggeration that might raise red flags legally</h1>
        <p className='text-center pt-12 w-8/12 mx-auto text-lg'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
      </div>
    </div>
  );
};

export default Hero;