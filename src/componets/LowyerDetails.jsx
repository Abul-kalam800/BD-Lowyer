import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addBookingSet } from '../utilits/BookingDone';
import { PiTrademarkRegistered } from "react-icons/pi";
import toast from 'react-hot-toast';

const LowyerDetails = () => {

    const data = useLoaderData();

    const { id } = useParams();

    const singalLaywer = data.find(layer => layer.id === parseInt(id));

    const { image, name, department, experience, licenseNo,availableDays,consultationFee } = singalLaywer;

    const handeleBooking =()=>{
        addBookingSet(singalLaywer);
        toast.success(` ${name} Successfully booked`)
        
    }
   
    return (
        <div>
            {/* loywer details heading  */}
            <div className='text-center py-24 bg-gray-300 my-8 rounded-2xl '>
                <h1 className='text-5xl font-bold mb-8'>Lawyer's Profile Details</h1>
                <p className='text-center  lg:px-20'> Our lawyer's best services provided.As much as client requrirment,We have many depertment lawyers you can tolk to our lowyers,Blew provided our lowyers profiles details you check and confirm the booking ,Booking is esey system just click the book appointment button.</p>
            </div>
                {/* loywer details part  */}
            <div className='border border-gray-300 mb-20 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center'>
                <div className='w-[300px] p-2  bg-gray-100 rounded-xl'>
                    <img className='w-[300px] mx-auto' src={image} alt="lowyer" />
                </div>
                <div>
                    <div>
                        <button className='bg-blue-50 text-blue-300 px-4 rounded-2xl font-semibold'>{experience}</button>
                    </div>
                    <h1 className='text-3xl font-bold mt-4'>{name}</h1>
                    <div className='flex gap-9 mt-6'>
                        <p className='mb-3'>{department}</p>
                        <p className='flex gap-2'><span><PiTrademarkRegistered  size={24} className='text-blue-300'/> </span> Lincense No - {licenseNo}</p>
                    </div>
                    <p className='font-semibold'> Aviablity:
                    {
                        availableDays.map(day => <button key={day.id} className='ml-2  text-sm md:text-xl md:ml-8 bg-red-50 text-red-300 rounded-2xl md:px-2'>{day}</button>)
                    }

                    </p>
                    <p className='font-semibold mt-8'> Consaltancy fee:  <span className='text-green-500'>{consultationFee} Taka </span></p>
                </div>



            </div>
            {/* loywer booking button  */}
            <div className='my-9 border border-gray-300 p-5 rounded-2xl '>
                <h1 className='text-center text-3xl font-bold border-b border-dashed border-gray-300 pb-6'>Book an Appoinment </h1>
              <div className='flex justify-between items-center border-b border-dashed border-gray-300 py-5 '>
              <p className='font-bold'>Avaiability:</p>
              <button className='bg-green-50 text-green-600 px-6 py-2 rounded-2xl'>Lowers Avaiable today</button>
              </div>
                <Link to="/mybooking">
                <button onClick={()=>handeleBooking()} className='w-full bg-green-600 p-2 rounded-full text-white my-12 font-semibold text-xl cursor-pointer'>Book Appoinment now</button>
                </Link>
            </div>
        </div>
       
    );
};

export default LowyerDetails;