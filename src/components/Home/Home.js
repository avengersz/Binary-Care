import React from 'react';
import HomeServicesSection from '../HomeServicesSection/HomeServicesSection';
 import ParallaxSection from '../ParallaxSection/ParallaxSection';

const Home = () => {
    return (
        <div>
            {<ParallaxSection></ParallaxSection> }
            <HomeServicesSection></HomeServicesSection>
        </div>
    );
};

export default Home;