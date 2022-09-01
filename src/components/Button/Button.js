import React from 'react';
import './Button.css';
function Button(props) {
    
        return (
            <input type='button' value={props.label}/>
        );
    
}
 
export default Button;
