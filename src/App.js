import React, { Component } from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'0'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Display value={this.state.value}/>
        <ButtonPanel /> 
      
        </header>
      
      </div>
    );
  }
}

export default App;
