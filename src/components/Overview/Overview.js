import React from 'react';
import course  from '../../asset/images/online-course.png'
import mentor from '../../asset/images/mentorship.png'
import student from '../../asset/images/male-student.png'
const Overview = () => {
    return (
        <div className='container mx-auto my-10 p-3'>
            <div className='gap-5 row-gap-5 md:grid grid-cols-3 '>
            <div className="relative text-center bg-purple-600 rounded-md">
          <div className="flex items-center justify-center  mx-auto rounded-full  sm:w-20 sm:h-20">
        <img src= {course} alt="" />
          </div>
          <p className="max-w-md mb-3 text-2xl font-bold text-white sm:mx-auto p-1">
             200 + Premium and Free Online Courses Available
          </p>
         
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            
          </div>
        </div>
        <div className="relative text-center bg-purple-600 rounded-md">
          <div className="flex items-center justify-center  mx-auto rounded-full  sm:w-20 sm:h-20">
        <img src= {mentor} alt="" />
          </div>
          <p className="max-w-md mb-3 text-2xl font-bold text-white sm:mx-auto p-1">
             100 + Experienced and expert mentors
          </p>
         
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            
          </div>
        </div>
        <div className="relative text-center bg-purple-600 rounded-md">
          <div className="flex items-center justify-center  mx-auto rounded-full  sm:w-20 sm:h-20">
        <img src= {student} alt="" />
          </div>
          <p className="max-w-md mb-3 text-2xl font-bold text-white sm:mx-auto p-1">
             Daily 10 Hourse Student Live Support
          </p>
         
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            
          </div>
        </div>
                
            </div>
        </div>
    );
};

export default Overview;