import Button from "./Button";
import PropTypes from "prop-types";
import './App.css';

import React, { Component } from 'react';

export default class ButtonPanel extends Component {
    handleClick=(buttonName)=>{
        this.props.clickHandler(buttonName);
    }
    render() {
        return (
            <div>
                <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} />
          <Button label={'2'} handleClick={this.handleClick} />
          <Button label={'3'} handleClick={this.handleClick} />
          <Button label={'4'} handleClick={this.handleClick} />
          <Button label={'-'} handleClick={this.handleClick} />
          <Button label={'+'} handleClick={this.handleClick} />
        </div>

            </div>
            
        );
    }
}