import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Overview from '../Overview/Overview';
import Steps from '../Steps/Steps';




const Home = () => {
    return (
        <div>
            <Hero></Hero>
           <Overview></Overview>
           <Steps></Steps>
           <Footer></Footer>
        </div>
    );
};

export default Home;