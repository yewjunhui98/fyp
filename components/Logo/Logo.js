import React from 'react';
import portalLogo from '../../assets/images/portal-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={portalLogo} alt="Portal"/>
    </div>
);

export default logo;