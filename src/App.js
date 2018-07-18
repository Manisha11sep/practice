import React, { Component } from 'react';
import Display from './Display'
import ButtonPanel from './ButtonPanel'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      total:null,
      next:null,
      operation:null,
      display: '0',
      reset:false
    }
  }
    handleClick = buttonName =>{
      this.setState({display:buttonName})
   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <Display value={this.state.next || this.state.total ||'0'}/> */}
        <ButtonPanel/> 
      
        </header>
      
      </div>
    );
  }
}

export default App;
