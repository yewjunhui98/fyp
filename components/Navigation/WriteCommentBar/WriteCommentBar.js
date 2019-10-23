import React from 'react';
import WriteCommentDrawerToggle from '../CommentsDrawer/WriteCommentDrawerToggle/WriteCommentDrawerToggle';

const writecommentbar = (props) => (
    <WriteCommentDrawerToggle clicked={props.writeCommentDrawerToggleClicked}/>
);

export default writecommentbar;