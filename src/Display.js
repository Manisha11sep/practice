import React from 'react';
import PropTypes from "prop-types";

const Display = (props) =>{
return (
  
    <div> 
          {console.log("props are",this .props)}
        <input type = "text" label ={props.display} />
        </div>
)
}

//describe the type of props that the parent is going to pass intothis component

Display.propTypes = {
    display : PropTypes.string.isRequired
}

export default Display;