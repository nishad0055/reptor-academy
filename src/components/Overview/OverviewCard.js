import React from "react";
import { Link } from "react-router-dom";

const OverviewCard = ({ cat }) => {
  const { icon, name } = cat;
  return (
    <div className="/">
      <div className="card card-compact h-full w-full bg-base-100 shadow-md p-5 transform transition duration-500 hover:scale-110">
        <figure>
          {icon}
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-center text-xl font-serif font-bold">{name}</h2>
        
          <div className="card-actions justify-center">
            <Link  to='/courses' className="text-[#FC7A0E] text-lg font-serif">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
