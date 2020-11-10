import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import '../css/styles.css';

class TeamInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: ['', '', '', '', '', '', '', '']
    };
  }

  getName = (e) => {
    const nameIndex = parseInt(e.target.id.match(/\d+/).pop());
    return this.state.names[nameIndex];
  }

  setName = (e) => {
    const nameIndex = parseInt(e.target.id.match(/\d+/).pop());
    this.setState(state => {
      const names = state.names.map((name, currIndex) => {
        if (currIndex === nameIndex) {
          return e.target.value;
        } else {
          return name;
        }
      });

      return { names };
    });
    console.log(this.state.names);
  }

  render() {
    return (
      <div className="teamForm">
        <h2>Team Information</h2>
        <Form>
          <Form.Group controlId="formNames">
            <Form.Label>Member Names</Form.Label>
            <Form.Row>
              <Col md="1"></Col>
              <Col>
                <Form.Control id="formNameInput0" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[0] }/>
              </Col>
              <Col>
                <Form.Control id="formNameInput1" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[1] }/>
              </Col>
              <Col>
                <Form.Control id="formNameInput2" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[2] }/>
              </Col>
              <Col>
                <Form.Control id="formNameInput3" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[3] }/>
              </Col>
              <Col md="1"></Col>
            </Form.Row>
            <Form.Row>
              <Col md="1"></Col>
              <Col>
                <Form.Control id="formNameInput4" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[4] }/>
              </Col>
              <Col>
                <Form.Control id="formNameInput5" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[5] }/>
              </Col>
              <Col>
                <Form.Control id="formNameInput6" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[6] }/>
              </Col>
              <Col>
                <Form.Control id="formNameInput7" as="input" placeholder="Name" onChange={ this.setName } value={ this.state.names[7] }/>
              </Col>
              <Col md="1"></Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default TeamInput;
