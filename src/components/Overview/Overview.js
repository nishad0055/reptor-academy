import React from 'react';
import course  from '../../asset/images/online-course.png'
import mentor from '../../asset/images/mentorship.png'
import student from '../../asset/images/male-student.png'
const Overview = () => {
    return (
        <div className='container mx-auto my-10 p-3'>
            <div className='md:grid grid-cols-3'>
                 <div className='md:flex items-center gap-2 shadow-sm'>
                     <div>
                         <img className='h-[100px] w-[200px]' src= {course} alt="" />
                     </div>
                     <div>
                        <h2 className='text-xl font-bold'>100+ BestSeller Free & Premium online Courses</h2>
                     </div>
                 </div>
                 <div className='md:flex items-center gap-2'>
                     <div>
                         <img className='h-[100px] w-[200px]' src= {mentor} alt="" />
                     </div>
                     <div>
                        <h2 className='text-xl font-bold'>100+ BestSeller Free & Premium online Courses</h2>
                     </div>
                 </div>
                 <div className='md:flex items-center gap-2'>
                     <div>
                         <img className='h-[100px] w-[200px]' src= {student} alt="" />
                     </div>
                     <div>
                        <h2 className='text-xl font-bold'>100+ BestSeller Free & Premium online Courses</h2>
                     </div>
                 </div>
                
            </div>
        </div>
    );
};

export default Overview;