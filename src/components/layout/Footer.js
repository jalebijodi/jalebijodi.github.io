import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function SocialMediaIcons(){
    return<ul className="social-media-links list-unstyled justify-content-center d-flex">
          <li><a href="https://twitter.com/jalebi_jodi" target='blank'> <i className="bi bi-twitter social-media-icon" /></a></li>
          <li><a href="https://www.instagram.com/jalebi_jodi/" target='blank'> <i className="bi bi-instagram social-media-icon" /></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100090281280553" target='blank'> <i className="bi bi-facebook social-media-icon" /></a></li>
          <li><a href="mailto:info@jalebijodi.com"> <i className="bi bi-envelope social-media-icon" /></a></li>
          </ul>
}

function FooterLinks(){
  return <div className = 'footer-links d-flex justify-content-center'>
    <ul className="footer-links list-inline text-center footer-font">
         <li className="list-inline-item resources-links"><a href="mailto:info@jalebijodi.com">info@jalebijodi.com</a></li>
         <li className="list-inline-item resources-links footer-anchor-links"> <Link to="/privacy" className="list-inline-item resources-links footer-anchor-links"> Privacy Policy</Link></li>
         <li className="list-inline-item resources-links footer-anchor-links"> <Link to="/terms" className="list-inline-item resources-links footer-anchor-links"> Terms of Use</Link></li>
    </ul>
  </div>
}

function CopyRight(){
  return <p className="copyright d-flex justify-content-center">© 2023 Jalebi Jodi. All rights reserved.</p>
}

const Footer = () => {
  return (
    <Container className='footer-container'>
      <Row className="pt-5 px-5 g-0">
      <SocialMediaIcons></SocialMediaIcons>
      <FooterLinks></FooterLinks>
      <CopyRight></CopyRight>
      </Row>
    </Container>
  )
}

export default Footer;