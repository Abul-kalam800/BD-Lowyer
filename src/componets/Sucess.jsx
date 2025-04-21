import React from 'react';
import lawer from '../assets/success-doctor.png';
import review from '../assets/success-review.png';
import staffs from '../assets/success-staffs.png';
import cost from '../assets/success-patients.png'

const Sucess = () => {
    return (
        <div>
            <div className='text-center mt-20 mb-10 '>
                <h1 className="text-4xl font-bold my-8"> We Provide Best Law Services</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='sucess-container grid grid-col md:grid-cols-4 gap-6 mb-32'>
                <div className='card space-y-5 p-8 bg-gray-300'>
                    <div><img src={lawer} alt="lawer" /></div>
                    <h1 className='text-6xl font-bold'>199+ </h1>
                    <p className='text-xl font-medium'>Total lowyers</p>
                </div>
                <div className='card space-y-5 p-8 bg-gray-300'>
                <div><img src={review} alt="lawer" /></div>
                    <h1 className='text-6xl font-bold'>447+ </h1>
                    <p className='text-xl font-medium'>Total review</p>
                </div>
                <div className='card space-y-5 p-8 bg-gray-300'>
                <div><img src={cost} alt="lawer" /></div>
                    <h1 className='text-6xl font-bold'>1900+ </h1>
                    <p className='text-xl font-medium'>Total Case initled</p>
                </div>
                <div className='card space-y-5 p-8 bg-gray-300'>
                <div><img src={staffs} alt="lawer" /></div>
                    <h1 className='text-6xl font-bold'>300+ </h1>
                    <p className='text-xl font-medium'>Total Staffs</p>
                </div>

            </div>
        </div>
    );
};

export default Sucess;