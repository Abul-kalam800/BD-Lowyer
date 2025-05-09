import React from 'react';
import { Link } from 'react-router';
const Chart = ({ book, handelRemovedBooing }) => {
    const { name, department, consultationFee,id } = book;
 
   
   
    return (
        <div>
            {/* this is charts  section  */}
            <div className='my-9 border border-gray-300 p-5 rounded-2xl '>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <div className='flex justify-between items-center border-b border-dashed border-gray-300 py-5 '>
                    <p className='font-bold'>{department}</p>
                    <button className='bg-green-50 text-green-600 px-6 py-2 rounded-2xl'>Appointment Fee: {consultationFee} Taka</button>
                </div>
                <Link to="/mybooking">
                    <button onClick={()=>handelRemovedBooing(id)} className='w-full border border-red-200 p-2 rounded-full text-red-500 my-12 font-semibold text-xl cursor-pointer hover:bg-red-500 hover:text-white hover:transition delay-400'>Cancle Appoinment</button>
                </Link>
            </div>
        </div>
    );
};

export default Chart;