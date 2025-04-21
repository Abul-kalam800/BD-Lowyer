import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const LowyerDetails = () => {

    const data = useLoaderData();

    const { id } = useParams();

    const singalLaywer = data.find(layer => layer.id === parseInt(id));

    const { image, name, department, experience, licenseNo,availableDays,consultationFee } = singalLaywer;
    return (
        <div>
            {/* loywer details heading  */}
            <div className='text-center py-24 bg-gray-300 my-8 rounded-2xl '>
                <h1 className='text-5xl font-bold mb-8'>Lawyer's Profile Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br />facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
                {/* loywer details part  */}
            <div className='border border-gray-300 mb-20 rounded-2xl p-8 flex gap-8 items-center'>
                <div className='w-[300px] p-8  bg-gray-100 rounded-xl'>
                    <img className='max-h-full max-w-full mx-auto' src={image} alt="lowyer" />
                </div>
                <div>
                    <div>
                        <button className='bg-blue-100 text-blue-300 px-4 rounded-2xl font-semibold'>{experience}</button>
                    </div>
                    <h1 className='text-3xl font-bold mt-4'>{name}</h1>
                    <div className='flex gap-9 mt-6'>
                        <p className='mb-3'>{department}</p>
                        <p> Lincense No - {licenseNo}</p>
                    </div>
                    <p className='font-semibold'> Aviablity:
                    {
                        availableDays.map(day => <button className='ml-8 bg-red-200 text-red-300 rounded-2xl px-4'>{day}</button>)
                    }

                    </p>
                    <p className='font-semibold mt-8'> Consaltancy fee: <span className='text-green-500'>{consultationFee} Taka </span></p>
                </div>



            </div>
            {/* loywer booking button  */}
        </div>
       
    );
};

export default LowyerDetails;