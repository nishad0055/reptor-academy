import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const CourseCard = ({course}) => {
    const {title, image_url, rating,instructor , _id} = course

    return (
        <div>
             <Link to= {`/course-details/${_id}`}>
             <div className="card h-full  bg-base-100 shadow-md">
                <figure><img className='h-[180px] w-[320px]' src= {image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{rating.badge} </div>
                    </h2>
                    <div>
                    <h5 className='mb-0' >Instructor:{instructor.name}</h5>
                    <h5 className='' ><small>{instructor.title}</small></h5>
                    </div>
                    <div className="card-actions">
                    <div className="badge badge-outline text-yellow-600 ">{rating.number}</div> 
                    <div className="badge badge-outline text-yellow-500"> <FaStar  ></FaStar> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar> <FaStarHalfAlt/> </div>
                    </div>
                </div>
           </div> 
             </Link>
        </div>
    );
};

export default CourseCard;