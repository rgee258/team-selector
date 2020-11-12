import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/styles.css';

const TeamResults = (props) => {

  return (
    <Container className="teamDisplay text-center">
      <Row className="mb-3 mt-3">
        <Col>
          <h2>Team 1</h2>
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
        <Col>
          <h2>Team 2</h2>
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
      <Form className="formSubmit mb-4" onSubmit={props.displayInput}>
        <Button className="formSubmit" type="submit">New Teams</Button>
      </Form>
    </Container>
  );
}

export default TeamResults;
