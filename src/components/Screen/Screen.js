import React from 'react';
import './Screen.css';

const Screen = (props) => {
    return(
        <>
            <input type='text' className='screen-input' value={props.value} readOnly/>
        </>
    );
}

export default Screen;