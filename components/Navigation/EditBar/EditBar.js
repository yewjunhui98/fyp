import React from 'react';
import EditDrawerToggle from '../EditDrawer/EditDrawerToggle/EditDrawerToggle';

const editbar =(props)=>(
    <EditDrawerToggle clicked={props.editDrawerToggleClicked}/>
);

export default editbar;