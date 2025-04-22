 import React from 'react';
import { Link } from 'react-router';
import { PiTrademarkRegistered } from "react-icons/pi";


 
 const Lowyer = ({lowyer}) => {

    const handleDetails = ()=>{
   
     }
    const {image,name,department,experience,licenseNo,id} =lowyer;
    return (
        <div className='flex flex-col md:flex-row gap-9 border border-solid border-gray-300 p-4 rounded-2xl'>
            <div className='w-[200px] h-[190px] object-cover bg-gray-100 rounded-xl'> 
                <img className='h-[185px] w-[195px]' src={image} alt="lowyer" />
            </div>
            <div>
                <div className='flex gap-5'>
                    <button className='bg-green-50 text-green-500 px-4 rounded-2xl font-semibold'>Avilable</button>
                    <button className='bg-blue-50 text-blue-500 px-4 rounded-2xl font-semibold'>{experience}</button>
                </div>
                <h1 className='text-2xl font-bold mt-4'>{name}</h1>
                <p className='mb-3'>{department}</p>
                <p className='flex gap-2'><PiTrademarkRegistered  size={24} className='text-blue-400'/> Lincense No - {licenseNo}</p>
                 <Link to ={`lowyerdetails/${id}`}><button onClick={()=>handleDetails()} className='w-full text-center border border-solid text-blue-400 font-semibold py-2 rounded-full cursor-pointer mt-3 hover:bg-blue-400 hover:text-white  transition delay-200'>View Details</button></Link>
            </div>
        </div>
    );
 };
 
 export default Lowyer;