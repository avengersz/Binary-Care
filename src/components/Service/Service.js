import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {title, body, icon} = props.service;
    return (
        <Col>
      <Card className="shadow p-3 bg-white rounded border-0">
        <Card.Img variant="top" style={{width: '80px', margin: '0 auto', borderRadius: '50%'}} src={icon} />
        <Card.Body>
          <Card.Title><h3>{title}</h3></Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;