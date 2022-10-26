import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const CourseDetails = () => {
    const details = useLoaderData();
    return (
        <div>
          {
            details.map(course=> <CourseCard
            course={course}
            ></CourseCard>)
          }
        </div>
    );
};

export default CourseDetails;