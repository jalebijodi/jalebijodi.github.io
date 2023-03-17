import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import url from '../images/sitting-couple.svg';
import Heading from '../utilities/Heading';
import Description from '../utilities/Description';
import Picture from '../utilities/Picture';

const heading = 'Why Us';
const description = 'At Jalebi Jodi, we offer free services to help you find the love of your life. Our passionate volunteers have extensive knowledge of dating apps, matrimonial sites, and speed dating events. We believe everyone deserves the best chance at finding love, so our services are completely free and open to all individuals, regardless of background. Let us help you on your journey toward a fulfilling and happy relationship.';

const About = () => {
  return (
    <Container className='g-0 p-5 about'>
      <Row data-aos="fade-up" className='g-0 py-5'>
        <Col xs={12} md={6} className='px-3'>
          <Heading heading={heading} />
          <Description description={description} />
        </Col>
        <Col xs={12} md={6} className='px-3'>
          <Picture url={url} />
        </Col>
      </Row>
    </Container>
  )
}

export default About;