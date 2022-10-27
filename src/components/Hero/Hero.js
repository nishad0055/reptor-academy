import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'
import home from '../../asset/images/home.png'

const Hero = () => {
    return (
        <div className='hero' >
            <div className='container mx-auto md:flex justify-around items-center p-3'>
                <div className='hero-info' >
                <h2 className=' md:text-6xl text-3xl font-bold my-2' >An excellent Center</h2> 
                    <h2 className='text-orange-600 md:text-5xl text-2xl font-bold'>for Skill Development</h2>
                    <p className=' my-3' >Upgrage is the largest onlice course platform that offers various courses for your skill development</p>
                    <button className='btn btn-warning md:my-2' ><Link to ='/courses' >Get Started</Link> </button>
                </div>
                 <div className="hero-img">
                     <img className='md:h-[550px]' src= {home} alt="" />
                 </div>
            </div> 
        </div>
    );
};

export default Hero;