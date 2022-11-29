import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import blog from "../../asset/images/blog.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container mx-auto lg:flex justify-center items-center">
          <div className="hero-info">
            <p className="text-center text-white">START LEARNING FROM HOME</p>
            <h2 className=" lg:text-7xl text-3xl font-bold text-white text-center font-serif">
              Connect With Our Expert And <br /> Start Learning Today
            </h2>
            <p className=" my-3 text-white text-center font-serif">
              Upgrage is the largest onlice course platform that offers various
              courses for your skill development
            </p>
            <div className="flex justify-center gap-2">
              <button className="btn btn-warning">
                <Link to="/courses">Get Started</Link>{" "}
              </button>
              <button className="btn btn-outline btn-warning">
                <Link to="/courses">Get Started</Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center p-5 gap-5 bg-base-100 rounded-lg shadow-xl container mx-auto -mt-10">
        <figure className="lg:w-1/2">
          <img src={blog} alt="Album" />
        </figure>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-semibold">
            50% Discount On All Of  Our New & Upcoming Courses
          </h2>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-5">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl text-[#FF630E]">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl text-[#FF630E]">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl text-[#FF630E]">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl text-[#FF630E]">
                <span style={{ "--value": 50 }}></span>
              </span>
              sec
            </div>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-warning btn-lg mt-5">Enroll</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
