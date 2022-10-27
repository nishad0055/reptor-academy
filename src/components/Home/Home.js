import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Overview from '../Overview/Overview';
import Stats from '../Stats/Stats';
import Steps from '../Steps/Steps';
import Mentors from '../Mentors/Mentors'





const Home = () => {
    return (
        <div>
            <Hero></Hero>
           <Overview></Overview>
           <Steps></Steps>
           <Stats></Stats>
           <Mentors></Mentors>
           <Footer></Footer>
        </div>
    );
};

export default Home;