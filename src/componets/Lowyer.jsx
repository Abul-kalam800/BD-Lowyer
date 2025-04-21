 import React from 'react';
 
 const Lowyer = ({lowyer}) => {
    const {image,name,department,experience,licenseNo} =lowyer;
    return (
        <div className='flex gap-9 border border-solid border-gray-300 p-4 rounded-2xl'>
            <div className='w-[200px] h-[190px] p-8  bg-gray-100 rounded-3xl'> 
                <img className='max-h-full max-w-full mx-auto' src={image} alt="lowyer" />
            </div>
            <div>
                <div className='flex gap-5'>
                    <button className='bg-green-100 text-green-300 px-4 rounded-2xl font-semibold'>Aviable</button>
                    <button className='bg-blue-100 text-blue-300 px-4 rounded-2xl font-semibold'>{experience}</button>
                </div>
                <h1 className='text-2xl font-bold mt-4'>{name}</h1>
                <p className='mb-3'>{department}</p>
                <p> Lincense No - {licenseNo}</p>
                 <button className='w-full text-center border border-solid text-blue-400 font-semibold py-2 rounded-full cursor-pointer mt-3'>View Details</button>
            </div>
        </div>
    );
 };
 
 export default Lowyer;