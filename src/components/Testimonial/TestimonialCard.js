import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, image, description , location } = testimonial;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{description}</p>
          <div className="flex gap-2 items-center">
            <div>
                <img className="w-12" src= {image} alt="" />
            </div>
            <div>
                <h4 className="text-lg font-semibold" >{name}</h4>
                <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
