import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import bgImg from '../../images/bg.jpg';

const ParallaxSection = () => {
    return (
        <div>
            <div>
           <Parallax bgImage={bgImg} strength={300}>
               <div style={{height: 500}}>
               <div className="text-secondary" style={{paddingTop: 180}}>
               <h1>We will provides online Teaching</h1>
               <p>You can Improve your knowledge from our institute.</p>
               <button className="bg-primary px-3 py-2 rounded border-0"><Link to='/contact' style={{color: 'white', textDecoration: 'none'}}>Contact Us</Link></button>
               </div>
               </div>
           </Parallax>
           </div>
        </div>
    );
};

export default ParallaxSection;