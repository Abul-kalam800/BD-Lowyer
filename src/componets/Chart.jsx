import React from 'react';
import { Link } from 'react-router';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';

const Chart = ({ book}) => {
    const { name, department, consultationFee } = book;   
    
    return (
        <div>
            <h1>chart</h1>
            <div className='my-9 border border-gray-300 p-5 rounded-2xl '>
                <h1 className='text-center text-3xl font-bold border-b border-dashed border-gray-300 pb-6'>My today an Appoinment </h1>
                <h1>{name}</h1>
                <div className='flex justify-between items-center border-b border-dashed border-gray-300 py-5 '>
                    <p className='font-bold'>{department}</p>
                    <button className='bg-green-50 text-green-600 px-6 py-2 rounded-2xl'>{consultationFee} Taka</button>
                </div>
                <Link to="/mybooking">
                    <button className='w-full bg-green-600 p-2 rounded-full text-white my-12 font-semibold text-xl cursor-pointer'>cancle Appoinment now</button>
                </Link>
            </div>
        </div>
    );
};

export default Chart;