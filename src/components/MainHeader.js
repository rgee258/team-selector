/**
 * MainHeader.js
 * 
 * Functional component for displaying the application navbar.
 */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import ghIcon from '../images/GitHub-Mark-Light-32px.png';


const MainHeader = () => {
  return (
    <Container fluid className="main-header p-0">
      <Navbar className="headerNav" variant="dark">
        <Navbar.Brand href="/">
          <FontAwesomeIcon className="faIcon" icon={ faUsers } />
          Team Selector
        </Navbar.Brand>
        <Nav className="w-100 justify-content-end">
          <Nav.Link className="pr-0" href="https://github.com/rgee258/team-selector">
            <Image src={ ghIcon } fluid />
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default MainHeader;
