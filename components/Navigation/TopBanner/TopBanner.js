import React from 'react';

import classes from './TopBanner.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Banner}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        &nbsp;&nbsp;
        <div style={{color: '#ffffff'}}>Placeholder Portal Name</div>
    </header>
);

export default toolbar;