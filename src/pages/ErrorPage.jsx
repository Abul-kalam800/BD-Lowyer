import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='mt-42'>
            <p className='text-5xl text-center mb-7'>No Data Found</p>
            <h1 className='text-3xl font-bold text-center '>Oops! Erro 404</h1>
           <div className='text-center'>
            <Link to = "/"> <button className='px-6 py-3 bg-green-500 text-white font-bold text-center mt-8 rounded-4xl cursor-pointer hover:bg-black'>Go to Home</button></Link>
             </div>

        </div>
    );
};

export default ErrorPage;