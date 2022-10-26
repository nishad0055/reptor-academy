import React from 'react';
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const CourseCard = ({course}) => {
    const {title, image_url, rating,instructor} = course

    return (
        <div>
             <Link to= {`/course-details/${course._id}`}>
             <div className="card h-full md:w-80 bg-base-100 shadow-xl">
                <figure><img className='h-[180px] w-[320px]' src= {image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{rating.badge} </div>
                    </h2>
                    <h5 className='m-0 p-0' >Instructor:{instructor.name}</h5>
                    <h5 className='' ><small>{instructor.title}</small></h5>
                    <div className="card-actions">
                    <div className="badge badge-outline text-yellow-600 ">{rating.number}</div> 
                    <div className="badge badge-outline text-yellow-500"> <FaStar  ></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>
                    </div>
                </div>
           </div> 
             </Link>
        </div>
    );
};

export default CourseCard;