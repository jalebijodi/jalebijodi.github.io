import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import Terms from "./components/Terms";
import { Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";
import Container from 'react-bootstrap/Container';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      {" "}
      <>
      <Container className=" g-0 application">
      <Header />
        <Routes>
          <Route path="/app" element={<Home />} />
          <Route path="/#" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Container>
      </>
    </>
  );
}

export default App;
