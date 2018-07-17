
import PropTypes from "prop-types";

import React, { Component } from 'react';

export default class Button extends Component {
handlClick=()=>{
    this.props.clickHandler(this.props.name);
}

    render() {
        return (
            <div>
                <button onClick={this.handlClick}> {this.props.name} </button>
                </div>
            
        );
    }
}

Button.propTypes={
    type:PropTypes.string,
    handleClick:PropTypes.func,
};