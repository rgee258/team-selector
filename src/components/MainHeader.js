import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../css/styles.css';

const MainHeader = () => {
  return (
    <div className="main-header">
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand>
          Team Selector
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default MainHeader;
