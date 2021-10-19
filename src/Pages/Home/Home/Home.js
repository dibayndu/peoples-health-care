import React from 'react';
import Achieve from '../../Achieve/Achieve';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Achieve></Achieve>
        </div>
    );
};

export default Home;