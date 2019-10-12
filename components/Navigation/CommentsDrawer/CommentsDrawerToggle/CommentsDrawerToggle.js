import React from 'react';
import commentsIcon from '../../../../assets/images/comment.png';

const CommentsDrawerToggle = (props) =>{
    return(
        <div onClick={props.clicked}>
            <img src={commentsIcon} alt="commentsIcon"/>
            {props.noofcomments} comments
        </div>
        );
}

export default CommentsDrawerToggle;
