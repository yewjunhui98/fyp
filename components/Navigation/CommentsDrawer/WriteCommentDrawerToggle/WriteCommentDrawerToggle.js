import React from 'react';
import classes from './WriteCommentDrawerToggle.css';

const WriteCommentDrawerToggle = (props) =>{
    return(
        <div className={classes.selfcomment} onClick={props.clicked}>
            <h4>Comments: </h4>
        </div>
    );
}

export default WriteCommentDrawerToggle;