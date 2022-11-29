import React from 'react';
import Hero from '../Hero/Hero';
import Overview from '../Overview/Overview';
import Stats from '../Stats/Stats';
import Steps from '../Steps/Steps';
import Mentors from '../Mentors/Mentors'
import ReadyJoining from '../ReadyJoining/ReadyJoining';
import Testimonial from '../Testimonial/Testimonial';









const Home = () => {
    return (
        <div>
            <Hero></Hero>
           <Overview></Overview>
           
           <Steps></Steps>
           <Stats></Stats>
           <ReadyJoining></ReadyJoining>
           <Mentors></Mentors>
           <Testimonial></Testimonial>
           
        </div>
    );
};

export default Home;