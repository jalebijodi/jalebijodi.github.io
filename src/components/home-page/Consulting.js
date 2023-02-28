import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import url from '../images/wedding.svg';

import Heading from '../utilities/Heading';
import Description from '../utilities/Description';
import Picture from '../utilities/Picture';

const heading = '1:1 Consulting';
const description = 'Navigating real-life scenarios, dating apps, and matrimony apps can be overwhelming, but with our expert consulting, we can help you navigate your situation effectively and be one step closer to your perfect match.';

function OnClick() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSfqw0e4ac4TUOlOTYSISGGlhxS6R_6oftoksDLqERwNnwpIhA/viewform', "_blank");
}

function Btn() {
  return <Button variant="outline-light" onClick={OnClick}>Request Now</Button>
}

const Consulting = () => {
  return (
    <Container className='g-0 consulting p-5 box-shadow'>
      <Row data-aos="fade-up" className='g-0 py-5'>
        <Col xs={12} md={6} className='px-3'>
          <Picture url={url} />
        </Col>
        <Col xs={12} md={6} className='px-3'>
          <Heading heading ={heading} />
          <Description description={description} />
          <Btn />
        </Col>
      </Row>
    </Container>
  )
}

export default Consulting;