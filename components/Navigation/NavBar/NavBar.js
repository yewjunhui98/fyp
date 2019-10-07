import React from 'react';

import classes from './NavBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <footer className={classes.NavBar}>        
        <nav className={classes.navItems}>        
            <NavigationItems drawerToggleClicked = {props.drawerToggleClicked}/>            
        </nav>
    </footer>
);

export default toolbar;