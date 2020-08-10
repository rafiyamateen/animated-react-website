import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './images/favicon.ico'
import Home from './components/Home'
import Courses from './components/Courses'
import NotFound from './components/NotFound'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState('light')
  const onChange = (e) => {
    if (e.target.checked) {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }
  return (
    <div className={theme}>
      <Router>
        <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Navbar.Brand>
            <img src={logo} alt='Logo' id='logo' />
            Web Development
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" id='nav_links'>
              <Nav.Link eventKey={1} as={Link} to="/">Home</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="courses"> Courses</Nav.Link>
              {/* <Nav.Link eventKey={3} as={Link} to="about">About</Nav.Link> */}
              <Nav.Link eventKey={4} href="#contact">Contact</Nav.Link>
            </Nav>

            <div className='custom-control custom-switch'>
              <input
                type='checkbox'
                className='custom-control-input'
                id='customSwitchesChecked'
                onChange={onChange}
              />
              <label className='custom-control-label' htmlFor='customSwitchesChecked' id='label'>
                Dark Mode
              </label>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <div id='footer'>
          <h3 id='contact'>
            Contact Us
          </h3>
          <div id='icons_div'>
            <FaFacebook className='foot_icons' id='fb' />
            <FaTwitter className='foot_icons' id='twitter' />
            <FaInstagram className='foot_icons' id='insta' />
            <FaYoutube className='foot_icons' id='youtube' />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
