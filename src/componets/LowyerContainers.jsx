import React, { useEffect, useState } from 'react';
import Lowyer from './Lowyer';

const LowyerContainers = ({ lowyers }) => {

    const [display, setDisplay] = useState([]);
    const [showAll, setShowAll] = useState(false)
    
    useEffect(() => {
        if (showAll) {
            setDisplay(lowyers);
        } else {

            setDisplay(lowyers.slice(0, 6));
        }

    },[lowyers, showAll]);


    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl mt-14 font-bold'>Our best lawyers</h1>
                <p className='text-center pt-12 w-[80%] mx-auto text-lg'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-10 my-16'>

                {
                    display.map((lowyer) => <Lowyer key={lowyer.id} lowyer={lowyer}></Lowyer>)
                }

            </div>
            <div className='text-center mb-8'>
                <button onClick={()=>setShowAll( prv => !prv)} className='cursor-pointer bg-green-400 rounded-2xl text-2xl  px-6 py-2 hover:bg-black text-white transition delay-200'>Show all lowyers</button>
            </div>

        </div>
    );
};

export default LowyerContainers;