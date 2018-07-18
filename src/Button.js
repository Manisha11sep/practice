
import PropTypes from "prop-types";

import React, { Component } from 'react';

export default class Button extends Component {

    render() {
        return (
            <div>
                
                <button onClick={this.props.action}> {this.props.label} </button>
                </div>
            
        );
    }
}

Button.propTypes={
    type:PropTypes.string,
    // handleClick:PropTypes.func,
};