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
      teamOne: [],
      teamTwo: [],
      showTeams: false
    }
  }

  displayTeams = (names, separations) => {
    const separatedPairs = this.getSeparatedPairs(separations);
    const teams = this.makeTeams(names, separatedPairs);

    this.setState({
      teamOne: teams[0],
      teamTwo: teams[1],
      showTeams: true
    })
  }

  displayInput = () => {
    this.setState({ showTeams: false });
  }

  makeTeams = (names, separatedPairs) => {
    // Handle case if names or separated pairs are 0
    if (separatedPairs.length === 0 || names.length === 0) {
      // Use slice to create a new to avoid mutation
      const randomizedNames = this.shuffle(names.slice(0).filter(name => name !== ""));
      return [randomizedNames.slice(0, Math.ceil(randomizedNames.length / 2)), randomizedNames.slice(Math.ceil(randomizedNames.length / 2))];
    } else {
      // Hard limit the randomize attempts to 100
      attemptLoop:
      for (let i = 0; i < 100; i++) {
        const randomizedNames = this.shuffle(names.slice(0).filter(name => name !== ""));
        const teamOne = randomizedNames.slice(0, Math.ceil(randomizedNames.length / 2));
        const teamTwo = randomizedNames.slice(Math.ceil(randomizedNames.length / 2));

        for (let j = 0; j < separatedPairs.length; j++) {
          if (teamOne.includes(separatedPairs[j][0]) && teamOne.includes(separatedPairs[j][1])) {
            continue attemptLoop;
          }

          if (teamTwo.includes(separatedPairs[j][0]) && teamTwo.includes(separatedPairs[j][1])) {
            continue attemptLoop;
          }
        }

        // Currently there is no handling if we reach the randomize limit with separated members
        // The names will be randomized and divided into teams as normal

        return [teamOne, teamTwo];
      }
    }

  }

  getSeparatedPairs = (separations) => {
    const separatedPairs = [];

    // Remember that i++ is incremental, it increments the value of i
    // Originally I put i + 2 which never actually changes the value of i
    //  and would loop infinitely
    for (let i = 0; i < separations.length; i += 2) {
      // Only add a separation pairing if there's an actual pairing
      if (separations[i] !== '' && separations[i + 1] !== '') {
        separatedPairs.push(separations.slice(i, i + 2));
      }
    }

    return separatedPairs;
  }

  shuffle = (shuffleArr) => {
    let currentIndex = shuffleArr.length, temp, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = shuffleArr[currentIndex];
      shuffleArr[currentIndex] = shuffleArr[randomIndex];
      shuffleArr[randomIndex] = temp;

    }

    return shuffleArr;
  }

  render() {
    return (
      <Container fluid className="p-0 team-selector">
        <MainHeader />
        <TeamInput displayTeams={this.displayTeams} />
        <TeamResults teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} displayInput={this.displayInput} />
      </Container>
    );
  }
}

export default TeamSelector;
