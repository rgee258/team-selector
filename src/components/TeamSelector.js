import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import MainHeader from './MainHeader';
import TeamInput from './TeamInput';
import TeamResults from './TeamResults';
import '../css/styles.css';

class TeamSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTeams: false
    }
  }

  render() {
    return (
      <div className="team-selector">
        <MainHeader />
        <TeamInput />
      </div>
    );
  }
}

export default TeamSelector;
