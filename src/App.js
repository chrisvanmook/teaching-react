import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Unicorn from './Unicorn'

class App extends Component {
  state = {
    unicornName: 'Nath'
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  changeName = () => {
    this.setState({
      unicornName:  'Nathy'
    })
  }

  detectHowl = (sentence) => {
    alert(`I heard an howl! it said: ${sentence}`)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={this.changeName}>Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Unicorn name={this.state.unicornName} getUnicornHowl={this.detectHowl} amount={56} />
      </div>
    );
  }
}

export default App;
