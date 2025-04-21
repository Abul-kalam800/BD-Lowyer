 import React from 'react';
import { Link } from 'react-router';


 
 const Lowyer = ({lowyer}) => {

    const handleDetails = ()=>{
   
     }
    const {image,name,department,experience,licenseNo,id} =lowyer;
    return (
        <div className='flex flex-col md:flex-row gap-9 border border-solid border-gray-300 p-4 rounded-2xl'>
            <div className='w-[200px] h-[190px] p-8  bg-gray-100 rounded-xl'> 
                <img className='max-h-full max-w-full mx-auto' src={image} alt="lowyer" />
            </div>
            <div>
                <div className='flex gap-5'>
                    <button className='bg-green-100 text-green-300 px-4 rounded-2xl font-semibold'>Avilable</button>
                    <button className='bg-blue-100 text-blue-300 px-4 rounded-2xl font-semibold'>{experience}</button>
                </div>
                <h1 className='text-2xl font-bold mt-4'>{name}</h1>
                <p className='mb-3'>{department}</p>
                <p> Lincense No - {licenseNo}</p>
                 <Link to ={`lowyerdetails/${id}`}><button onClick={()=>handleDetails()} className='w-full text-center border border-solid text-blue-400 font-semibold py-2 rounded-full cursor-pointer mt-3 hover:bg-blue-400 hover:text-white  transition delay-200'>View Details</button></Link>
            </div>
        </div>
    );
 };
 
 export default Lowyer;