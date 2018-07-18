import Button from "./Button";
import PropTypes from "prop-types";
import './App.css';

import React, { Component } from 'react';

export default class ButtonPanel extends Component {
    constructor() {
        super();
        this.state = {
          header: 'Calculator',
          display: '0',
          operator: '',
          temp: 0,
          resetDisplay: false,
        }
      }

      setDisplay(num){
        var display=(this.state.display=== '0' ? num : this.state.display+num)
        this.setState({display:(this.state.display.length<13)? display:this.state.display})
      }
    
      setOperator(operator) {
        if ( !this.state.operator ) {
          this.setState({ operator: operator, temp: parseInt(this.state.display), display: '0' });
        }
      }
      
      // calculate()
    
    render() {
        return (
            <div>
                <input value={this.state.display}/>
                <div className="button-row">
          <Button label={'AC'}  action={ () => { this.setOperator('0'); } } />
          <Button label={'%'} action={ () => { this.setOperator('%')} } />
          <Button label={'÷'} action={ () => { this.setOperator('÷'); } } />
        </div>
        <div className="button-row">
          <Button  label={'7'} action={ () => { this.setDisplay('7'); } } />
          <Button label={'8'} action={ () => { this.setDisplay('8'); } } />
          <Button label={'9'} action={ () => { this.setDisplay('9'); } } />
          <Button label={'*'} action={ () => { this.setOperator('*'); } }/>
    
        </div>
        <div className="button-row">
          <Button label={'4'} action={ () => { this.setDisplay('4'); } } />
          <Button label={'5'} action={ () => { this.setDisplay('5'); } } />
          <Button label={'6'} action={ () => { this.setDisplay('6'); } } />
          <Button label={'-'} action={ () => { this.setOperator('-'); } } />

        </div> <div className="button-row">
          <Button label={'1'} action={ () => { this.setDisplay('1'); } } />
          <Button label={'2'} action={ () => { this.setDisplay('2'); } } />
          <Button label={'3'} action={ () => { this.setDisplay('3'); } } />
          <Button label={'+'} action={ () => { this.setOperator('+'); } } />

        </div>
        <div className="button-row">
          <Button label={'0'}  action={ () => { this.setDisplay('0'); } } />
          <Button label={'.'}  action={ () => { this.setDisplay('.'); } } />
          <Button label={'='}  action={ () => { this.setOperator('='); } } />
     

        </div>

            </div>
            
        );
    }
}