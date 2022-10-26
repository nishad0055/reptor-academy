import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='md:grid grid-cols-12 container mx-auto gap-7 ' >
            <div className='col-span-2'>
               <Sidebar></Sidebar>
            </div>
            <div className='col-span-10'>
               <h2>hello data ami coming {courses.length} </h2>
               <div className='md:grid grid-cols-3 mx-auto gap-5 '>
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