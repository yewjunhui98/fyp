import React from 'react';

import classes from './DrawerToggle.css';
import drawerIcon from '../../../../assets/images/drawerToggle-icon.png';

const drawerToggle = (props) =>(
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <img src={drawerIcon} className={classes.DrawerIcon} alt="drawerToggle"/>
    </div>
);

export default drawerToggle;