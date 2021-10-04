import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="pb-5" style={{width: '90%', margin: '0 auto'}}>
            <h1 className="text-primary pt-5 pb-5">Our Services</h1>
            <div>
            <Row xs={1} md={3} className="g-5">
            {services.map(service => <Service key={service._id} service={service}></Service>)}
            </Row>
            </div>
        </div>
    );
};

export default Services;