import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    const courses = useLoaderData();
    return (
     
         <div className='md:grid grid-cols-12 gap-7 ' >
            <div className='col-span-2'>
               <Sidebar></Sidebar>
            </div>
            <div className='col-span-10'>
               <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-5 my-7'>
               {
                courses.map(course =><CourseCard key ={course._id}
                course ={course}
                ></CourseCard>)
              }
               </div>
            </div>
            
        </div>
        
    );
};

export default Courses;