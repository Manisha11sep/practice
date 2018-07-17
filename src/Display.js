import React from 'react';
import PropTypes from "prop-types";

const Display = (props) =>{
return (
    <div> 
        <input type = "text" value ={props.value} />
        </div>
)
}

//describe the type of props that the parent is going to pass intothis component

Display.propTypes = {
    value : PropTypes.string.isRequired
}

export default Display;