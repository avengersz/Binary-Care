import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const HomeServicesSection = () => {
    const [servicesHome, setServicesHome] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServicesHome(data))
    }, [])
    return (
        <div className="pb-5" style={{width: '80%', margin: '0 auto'}}>
            <h1 className="text-primary pt-5 pb-5">Our Services</h1>
            <div>
            <Row xs={1} md={2} className="g-5">
            {servicesHome.slice(0, 4).map(service => <Service key={service._id} service={service}></Service>)}
            </Row>
            </div>
        </div>
    );
};

export default HomeServicesSection;