import React from 'react';
import Hero from './home-page/Hero';
import Profiles from './home-page/Profiles';
import About from './home-page/About';
import Consulting from './home-page/Consulting'

const Home = () => {
  return (
    <div className='main'>
      <Hero/>
      <Profiles/>
      <About/>
      <Consulting/>
    </div>
  )
}

export default Home;