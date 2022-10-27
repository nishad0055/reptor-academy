import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar,  FaStarHalfAlt } from 'react-icons/fa'


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {title, details, image_url , instructor, duration , lecture, chapter, rating , _id} = courseDetails;
   
    return (
        <div  className='container mx-auto my-5 flex'>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-[400px]' src= {image_url} alt="/"/></figure>
            <div className="card-body">
                
                <h2 className="card-title">{title}</h2>
                <div>
                     <p className='text-gray-500'><span> Course Duration: {duration}</span> | <span>{chapter} Chapter</span> | <span>{lecture} Lecture.</span> </p>
                      <div className='flex justify-start'>
                         <p className='text-gray-500' >ratings: {rating.number}</p>
                        <div className='flex text-yellow-500'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalfAlt/>
                        </div>
                      </div>
                </div>
                <p>{details}</p>
                <div>
                <p className='mb-0' >Instructor:{instructor.name}</p>
                 <p className='' ><small>{instructor.title}</small></p>
                </div>
                <div className="card-actions justify-end">
                <button className="btn btn-warning"> <Link className='text-white'>DownLoad Pdf</Link> </button>   
                <button className="btn btn-warning"> <Link to= {`/checkout/${_id}`} className='text-white'>Get Premium Access</Link> </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CourseDetails;