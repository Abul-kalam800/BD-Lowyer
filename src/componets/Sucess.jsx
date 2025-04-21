 import React from 'react';
 import lawer from '../assets/success-doctor';
 
 const Sucess = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <h1 className="text-4xl font-bold my-9"> We Provide Best Law Services</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
                <img src={lawer} alt="lawer" />
        </div>
    );
 };
 
 export default Sucess;