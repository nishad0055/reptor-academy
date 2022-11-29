import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Sidebar from '../Sidebar/Sidebar';

const Category = () => {
    const category = useLoaderData();
    return (
        <div className='md:grid grid-cols-12 mx-2 gap-7 ' >
        <div className='col-span-2'>
           <Sidebar></Sidebar>
        </div>
        <div className='col-span-10'>
           <div className='md:grid grid-cols-3 mx-auto gap-5 my-7'>
           {
            category.map(course =><CourseCard
            key ={course._id}
            course ={course}
            ></CourseCard>
                )
          }
           </div>
        </div>
        
    </div>
    );
};

export default Category;