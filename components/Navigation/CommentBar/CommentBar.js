import React from 'react';
import CommentsDrawerToggle from '../CommentsDrawer/CommentsDrawerToggle/CommentsDrawerToggle';

const commentbar = ( props ) => (
    <CommentsDrawerToggle clicked={props.commentsDrawerToggleClicked} noofcomments={props.noofcomments} />
);

export default commentbar;