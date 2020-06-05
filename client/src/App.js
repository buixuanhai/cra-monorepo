import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sample } from 'common'
class App extends Component {
  state = {};
  a = 100;
  render() {
    return (
      <>
        <p>Home</p>
        <p>{this.a}</p>
      </>
    );
  }
}

export default App;
