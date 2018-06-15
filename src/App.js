import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalCard from "./components/AnimalCard";
import Wrapper from "./components/Wrapper";
import animal from "./animals.json";
import Nav from "./components/Navbar";
import Title from "./components/Title";
import Column from "./column.js";

function shuffleAnimals(array) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

    state = {
      animal,
      currentScore: 0,
      topScore: 0,
      rightWrong: "",
      clicked: [],
    };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)});
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
      const newScore = this.state.currentScore + 1;
      this.setState({
        currentScore: newScore,
        rightWrong: ""
       });
       if (newScore >= this.state.topScore) {
         this.setState({ topScore: newScore });
       } else if (newScore === 12) {
         this.setState({ rightWrong: "You Won!" });
       }
       this.handleShuffle();
    };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Try Again",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledAnimals = shuffleAnimals(animal);
    this.setState({ animals: shuffledAnimals });
  };


  render() {
    return (
    <Wrapper>
      <Nav
      title="Animal Clicky Game"
      score={this.state.currentScore}
      topScore={this.state.topScore}
      rightWrong={this.state.rightWrong}
      />
      <img src={logo} className="App-logo" alt="logo" />
    
    <Title>
      Try to click on each animal only once, click twice and you will reset the game.
    </Title>

      {this.state.animal.map(animal => (
        <Column size="md-3 sm-6">
        <AnimalCard
        id={animal.id}
        key={animal.id}
        name={animal.name}
        image={animal.image}
        handleClick={this.handleClick}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleShuffle={this.handleShuffle}
        />
      </Column>
      )
    )}
    </Wrapper>
    )};
  }

export default App;
