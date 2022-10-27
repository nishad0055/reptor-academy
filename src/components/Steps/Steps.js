import React from 'react';
import { FaCertificate, FaChair, FaSearch } from 'react-icons/fa';

const Steps = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
       
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          
          How It <span className='text-green-600'>Works</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative text-center bg-slate-600 rounded-md">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-20 sm:h-20">
            <FaSearch className='text-green-600' size ={50}></FaSearch>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-white">Find The Course</h6>
          <p className="max-w-md mb-3 text-sm text-white sm:mx-auto p-1">
            Lookout flogging bilge rat main sheet bilge water nipper fluke to go
            on account heave down clap
          </p>
         
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 mt-14 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center bg-slate-600 rounded-md">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-20 sm:h-20">
             <FaChair className='text-green-600' size ={50} ></FaChair>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-white">Book Seat</h6>
          <p className="max-w-md mb-3 text-sm text-white sm:mx-auto p-1">
            Lookout flogging bilge rat main sheet bilge water nipper fluke to go
            on account heave down clap
          </p>
         
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 mt-14 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="relative text-center bg-slate-600 shadow-sm rounded-md">
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full  sm:w-20 sm:h-20">
           <FaCertificate className='text-green-600' size ={50}></FaCertificate>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold text-white">Get Certificate</h6>
          <p className="max-w-md mb-3 text-sm text-white sm:mx-auto p-1">
            Lookout flogging bilge rat main sheet bilge water nipper fluke to go
            on account heave down clap
          </p>
         
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default Steps;