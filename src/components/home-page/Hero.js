import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import url from '../images/hero.svg';

function Heading() {
  return <h1 className=" py-4 hero-header section-header">Ready for Love?</h1>
}

function handleClick() {
  window.scrollTo({
    top:document.getElementById('profiles').offsetTop,
    behavior:"smooth"
});
}

function Btn() {
  return <Button variant="outline-light" onClick={handleClick}>Learn More</Button>
}

function Picture(props) {
  return <Image src={props.url} className='w-100' />
}


const Hero = () => {
  return (
    <Container className="hero g-0">
      <Row data-aos="fade-down" className=' hero-section-container g-0'>
        <Col xs={12} xl={6} className='px-3'>
          <Heading />
          <Btn />
        </Col>
        <Col xs={12} xl={6}>
          <Picture url={url} />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;