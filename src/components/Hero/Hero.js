import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'
import home from '../../asset/images/home.png'

const Hero = () => {
    return (
        <div className='hero' >
            <div className='container mx-auto md:grid grid-cols-2 gap-2'>
                <div className='hero-info mt-14 md:ml-10 ml-5' >
                <h2 className=' md:text-6xl text-3xl font-bold my-2' >An excellent Center</h2> 
                    <h2 className='text-orange-600 md:text-5xl text-3xl font-bold'>for Skill Development</h2>
                    <p className=' my-3' >Upgrage is the largest onlice course platform that offers various courses for your skill development</p>
                    <button className='btn btn-warning my-2' ><Link to ='/courses' >Get Started</Link> </button>
                </div>
                 <div className="hero-img my-2 md:ml-8">
                     <img className='h-[65%] w-auto  md:ml-20' src= {home} alt="" />
                 </div>
            </div> 
        </div>
    );
};

export default Hero;