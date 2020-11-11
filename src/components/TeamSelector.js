import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import MainHeader from './MainHeader';
import TeamInput from './TeamInput';
import TeamResults from './TeamResults';
import '../css/styles.css';

class TeamSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      separations: [],
      showTeams: false
    }
  }

  render() {
    return (
      <Container fluid className="p-0 team-selector">
        <MainHeader />
        <TeamInput />
      </Container>
    );
  }
}

export default TeamSelector;
