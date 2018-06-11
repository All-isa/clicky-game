import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalCard from "./components/AnimalCard";

class App extends Component {

    state = {
      animals
    };

  removeAnimal = id => {
    const animals = this.state.animals.filter(animal => animal.id !== id);
    this.setState({ animals });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the clicky game!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
