import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import url from '../images/sitting-couple.svg';
import Heading from '../utilities/Heading';
import Description from '../utilities/Description';
import Picture from '../utilities/Picture';
import Caption from '../utilities/Caption'

const name = 'Supriya Kankure';
const title = 'Founder, Jalebi Jodi';
const heading = 'Why Us';
const description = 'As someone who has personally struggled with dating apps, matrimonial sites, and speed dating events, I understand the difficulties off finding a romantic partner. That\'s why I founded Jalebi Jodi, a consulting service to help others navigate the dating process. Our services are completely free and open to all individuals regardless of background.';

const About = () => {
  return (
    <Container className='g-0 p-5 about'>
      <Row data-aos="fade-up" className='g-0 py-5'>
        <Col xs={12} md={6} className='px-3'>
          <Heading heading={heading} />
          <Description description={description} />
          <Caption name={name} title={title} />
        </Col>
        <Col xs={12} md={6} className='px-3'>
          <Picture url={url} />
        </Col>
      </Row>
    </Container>
  )
}

export default About;