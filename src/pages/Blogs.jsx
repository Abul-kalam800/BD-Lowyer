import React from 'react';
import { useLoaderData } from 'react-router';
import BlogQusandAnswr from '../componets/BlogQusandAnswr';

const Blogs = () => {

    const blogsData = useLoaderData();
      
    return (
        <div>
           <h1 className='text-4xl font-bold text-center my-14'>Our Blogs section</h1>
           <div>
            {
                blogsData.map(blog =><BlogQusandAnswr key= {blog.id} blog={blog}></BlogQusandAnswr> )
            }
           </div>
        </div>
    );
};

export default Blogs;