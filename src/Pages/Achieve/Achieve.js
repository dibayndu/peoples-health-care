import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Achieve1 from '../../images/Achieve/about6.jpg';
import Achieve2 from '../../images/Achieve/awards_iStock-1055161930_0.jpg';
import Achieve3 from '../../images/Achieve/OctoberCover.jpg';

const Achieve = () => {
    return (
        <>
        
            <Container className="mt-5">
            <h1>Our Achievements</h1>
  <Row className="mt-2">
    <Col xs={6} md={4}>
      <Image src={Achieve1} rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src={Achieve2} roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src={Achieve3} thumbnail />
    </Col>
  </Row>
</Container>
        </>
    );
};

export default Achieve;