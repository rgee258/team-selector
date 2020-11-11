import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import '../css/styles.css';

const MainHeader = () => {
  return (
    <Container fluid className="main-header p-0">
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand>
          <FontAwesomeIcon className="faIcon" icon={ faUsers } />
          Team Selector
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default MainHeader;
