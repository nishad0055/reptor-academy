import React from 'react';

const CourseCard = ({course}) => {
    const {title, image_url, rating,instructor} = course

    return (
        <div>
             <div className="card h-full md:w-80 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{rating.badge} </div>
                    </h2>
                    <h5 className='m-0 p-0' >Instructor:{instructor.name}</h5>
                    <h5 className='' ><small>{instructor.title}</small></h5>
                    <div className="card-actions">
                    <div className="badge badge-outline">{rating.number}</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
           </div> 
        </div>
    );
};

export default CourseCard;