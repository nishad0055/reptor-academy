import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {title, details, image_url , instructor, duration , lecture, chapter, rating} = courseDetails;
    console.log(details)
    return (
        <div  className='container mx-auto my-5 flex'>
          {
            <h3>{title}</h3>
          }
        </div>
    );
};

export default CourseDetails;