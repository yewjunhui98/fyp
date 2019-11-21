import React from 'react';
import classes from './ThoughtsDrawerToggle.css';

const ThoughtsDrawerToggle = (props) =>{
    return(
        <div className={classes.input} onClick={props.clicked}>
            <h4>Share your thoughts!</h4>
        </div>
    );
}

export default ThoughtsDrawerToggle;