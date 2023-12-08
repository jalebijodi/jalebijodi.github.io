import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Heading() {
  return <h1 className="py-4 section-header">Guide</h1>
}

//TBD
function Description() {
  return <>
  <p>TBD</p>
</>
}

const Guide = () => {
  return (
    <Container className='g-0 p-5 terms'>
      <Row className='g-0 pb-5'>
        <Col xs={12} className='px-3'>
          <Heading />
          <Description />
        </Col>
      </Row>
    </Container>
  )
}

export default Guide;