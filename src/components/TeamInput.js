/**
* TeamInput.js
*
* Class based component for accepting input used for team creation.
**/

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class TeamInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: this.props.names,
      separations: this.props.separations
    };
  }

  // setName()
  // Callback used for the onChange of name text inputs
  // Maps over the previous state to update the corresponding index and update accordingly
  setName = (e) => {
    // Retrieve the index of the array to set in state using the event element's id
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
  }

  // setSeparation()
  // Callback used for the onChange of select inputs
  // Maps over the previous state to update the corresponding index and update accordingly
  setSeparation = (e) => {
    // Retrieve the index of the array to set in state using the event element's id
    const separationIndex = parseInt(e.target.id.match(/\d+/).pop());
    this.setState(state => {
      const separations = state.separations.map((separation, currIndex) => {
        if (currIndex === separationIndex) {
          return e.target.value;
        } else {
          return separation;
        }
      });

      return { separations };
    });
  }

  // formSubmit()
  formSubmit = (e) => {
    e.preventDefault();

    this.props.displayTeams(this.state.names, this.state.separations);
  }

  render() {
    return (
      <Container className="teamForm text-center pb-4">
        <h2 className="mt-3 mb-4">Team Information</h2>
        <Form onSubmit={ this.formSubmit }>
          <Form.Group className="formNames pt-1 pb-4">
            <Form.Label className="formNamesLabel">Member Names</Form.Label>
            <Form.Row className="formNamesRow">
              <Col md="1"></Col>
              <Col>
                <Form.Control id="formNameInput0" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[0]}/>
              </Col>
              <Col>
                <Form.Control id="formNameInput1" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[1]}/>
              </Col>
              <Col>
                <Form.Control id="formNameInput2" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[2]}/>
              </Col>
              <Col>
                <Form.Control id="formNameInput3" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[3]}/>
              </Col>
              <Col md="1"></Col>
            </Form.Row>
            <Form.Row className="formNamesRow mt-2">
              <Col md="1"></Col>
              <Col>
                <Form.Control id="formNameInput4" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[4]}/>
              </Col>
              <Col>
                <Form.Control id="formNameInput5" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[5]}/>
              </Col>
              <Col>
                <Form.Control id="formNameInput6" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[6]}/>
              </Col>
              <Col>
                <Form.Control id="formNameInput7" as="input" placeholder="Name" onChange={this.setName} value={this.state.names[7]}/>
              </Col>
              <Col md="1"></Col>
            </Form.Row>
          </Form.Group>
          <Form.Group className="formSeparations pt-1 pb-4">
            <Form.Label className="formSeparationsLabel">Separated Members</Form.Label>
            <Form.Row className="formSeparationsRow">
              <Col md="3"></Col>
              <Col>
                <Form.Control id="formNameSeparate0" as="select" onChange={this.setSeparation} value={this.state.separations[0]}>
                  <option key="separateOption0" value=""></option>
                  { 
                    this.state.names.filter((name) => {
                      if (name !== '') { return true; }
                      return false;
                    }).map((name, index) => {
                      return (
                        <option key={`separateOption${index + 1}`}>{name}</option>
                      );
                    }) 
                  }
                </Form.Control>
              </Col>
              <Col>
                <Form.Control id="formNameSeparate1" as="select" onChange={this.setSeparation} value={this.state.separations[1]}>
                  <option key="separateOption0" value=""></option>
                  { 
                    this.state.names.filter((name) => {
                      if (name !== '') { return true; }
                      return false;
                    }).map((name, index) => {
                      return (
                        <option key={`separateOption${index + 1}`}>{name}</option>
                      );
                    }) 
                  }
                </Form.Control>
              </Col>
              <Col md="3"></Col>
            </Form.Row>
            <hr className="formSeparationBreak" />
            <Form.Row className="formSeparationsRow">
              <Col md="3"></Col>
              <Col>
                <Form.Control id="formNameSeparate2" as="select" onChange={this.setSeparation} value={this.state.separations[2]}>
                  <option key="separateOption0" value=""></option>
                  { 
                    this.state.names.filter((name) => {
                      if (name !== '') { return true; }
                      return false;
                    }).map((name, index) => {
                      return (
                        <option key={`separateOption${index + 1}`}>{name}</option>
                      );
                    }) 
                  }
                </Form.Control>
              </Col>
              <Col>
                <Form.Control id="formNameSeparate3" as="select" onChange={this.setSeparation} value={this.state.separations[3]}>
                  <option key="separateOption0" value=""></option>
                  { 
                    this.state.names.filter((name) => {
                      if (name !== '') { return true; }
                      return false;
                    }).map((name, index) => {
                      return (
                        <option key={`separateOption${index + 1}`}>{name}</option>
                      );
                    }) 
                  }
                </Form.Control>
              </Col>
              <Col md="3"></Col>
            </Form.Row>
            <hr className="formSeparationBreak" />
            <Form.Row className="formSeparationsRow">
              <Col md="3"></Col>
              <Col>
                <Form.Control id="formNameSeparate4" as="select" onChange={this.setSeparation} value={this.state.separations[4]}>
                  <option key="separateOption0" value=""></option>
                  { 
                    this.state.names.filter((name) => {
                      if (name !== '') { return true; }
                      return false;
                    }).map((name, index) => {
                      return (
                        <option key={`separateOption${index + 1}`}>{name}</option>
                      );
                    }) 
                  }
                </Form.Control>
              </Col>
              <Col>
                <Form.Control id="formNameSeparate5" as="select" onChange={this.setSeparation} value={this.state.separations[5]}>
                  <option key="separateOption0" value=""></option>
                  { 
                    this.state.names.filter((name) => {
                      if (name !== '') { return true; }
                      return false;
                    }).map((name, index) => {
                      return (
                        <option key={`separateOption${index + 1}`}>{name}</option>
                      );
                    }) 
                  }
                </Form.Control>
              </Col>
              <Col md="3"></Col>
            </Form.Row>
          </Form.Group>
          <Button className="formSubmit" type="submit">Create Team</Button>
        </Form>
      </Container>
    );
  }
}

export default TeamInput;
