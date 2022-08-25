import './css/header.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

function Header() {
  return (
    <Router>
      <header>
        <img src='https://i.postimg.cc/HW75tyLP/Vulcan-stocks-PS-calibri-bakgrund.png' alt='' />
        <Link to="/" style={{ textDecoration: 'none' }}><h1>Home</h1></Link>
        <Link to="/software" style={{ textDecoration: 'none' }}><h1>Software</h1></Link>
        <Link to="/equityResearch" style={{ textDecoration: 'none' }}><h1>Equity Research</h1></Link>
        <Link to="/technicalAnalysis" style={{ textDecoration: 'none' }}><h1>Technical Analysis</h1></Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}><h1>Contact</h1></Link>
      </header>
    </Router>

  );
}

export default Header;
