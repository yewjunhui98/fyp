import React from 'react';
import ThoughtsDrawerToggle from '../ThoughtsDrawer/ThoughtsDrawerToggle/ThoughtsDrawerToggle';

const thoughtsbar = (props) => (
    <ThoughtsDrawerToggle clicked={props.thoughtsDrawerToggleClicked} />
);

export default thoughtsbar;