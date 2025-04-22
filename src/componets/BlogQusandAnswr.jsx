 import React from 'react';
 
 const BlogQusandAnswr = ({blog}) => {
    const {quesion,answer}=blog;
    return (
        <div>
            <div className='border-gray-300 border mb-10 p-4 rounded-2xl'>
                <p className='text-2xl font-semibold mb-4'>Quesion: {quesion}</p>
                <p><span className='font-bold'>Answer:</span>{answer}</p>
            </div>
        </div>
    );
 };
 
 export default BlogQusandAnswr;