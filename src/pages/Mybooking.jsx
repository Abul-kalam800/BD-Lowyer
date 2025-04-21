import React from 'react';
import { Link } from 'react-router';

const Mybooking = () => {
    return (
        <div>
            <div className='my-52 text-center'>
                <h1 className='text-5xl font-bold'>Not yet Booking Please booking Now</h1>
             <Link to="/">   <button className='px-6 py-3 bg-blue-100 text-xl font-bold text-blue-500 rounded-full cursor-pointer my-5 hover:bg-blue-500 hover:text-white'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default Mybooking;