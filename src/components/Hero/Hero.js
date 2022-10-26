import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'
import home from '../../asset/images/home.png'

const Hero = () => {
    return (
        <div className='hero' >
            <div className='container mx-auto md:grid grid-cols-2 gap-2'>
                <div className='hero-info my-7' >
                    <h2 className='ml-5 md:text-6xl font-bold' >An excellent <span>center for Skill Development</span> </h2>
                    <p>Upgrage is the largest onlice course platform that offers various courses for your development</p>
                    <button><Link>Get Started</Link> </button>
                </div>
                 <div className="hero-img">
                     <img className='h-[65%] w-auto  md:ml-20' src= {home} alt="" />
                 </div>
            </div> 
        </div>
    );
};

export default Hero;