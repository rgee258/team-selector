/**
* TeamResults.js
*
* Functional component for displaying team results.
**/

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const TeamResults = (props) => {
  return (
    <Container className="teamDisplay text-center pb-4">
      <Row className="mb-3 mt-3">
        <Col className="teamOneCol pt-3 pb-5">
          <h2 className="teamOneText mb-4">Team 1</h2>
          <ListGroup>
            { 
              props.teamOne.map((name, index) => {
                return (
                  <ListGroup.Item key={`teamOneName${index}`}>
                    {name}
                  </ListGroup.Item>
                );
              })
            }
          </ListGroup>
        </Col>
        <Col className="teamTwoCol pt-3 pb-5">
          <h2 className="teamTwoText mb-4">Team 2</h2>
          <ListGroup>
            { 
              props.teamTwo.map((name, index) => {
                return (
                  <ListGroup.Item key={`teamTwoName${index}`}>
                    {name}
                  </ListGroup.Item>
                );
              })
            }
          </ListGroup>
        </Col>
      </Row>
      <Form className="formSubmit" onSubmit={props.displayInput}>
        <Button className="formSubmit" type="submit">New Teams</Button>
      </Form>
    </Container>
  );
}

export default TeamResults;
