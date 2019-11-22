import React from 'react';
import {Link} from 'react-router-dom';
import Aux from '../../../hoc/Aux1';

import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open)
    {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Banner}>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                </div>
                <br/>
                <footer>
                    <br/>
                    <b>Navigation</b> <br/><br/>
                    <nav className={classes.siteNav}>
                        <Link to="/discussion" onClick={props.closed} className={classes.slink}><span>Discussion</span></Link>
                        <Link to="/forum" onClick={props.closed} className={classes.slink}><span>Forum</span></Link>
                        <Link to="/members" onClick={props.closed} className={classes.slink}><span>Members</span></Link>
                        <br/>
                        <b>Portals</b> <br/><br/>
                        <Link to="/discussion" onClick={props.closed} className={classes.slink}><span>Portal</span></Link>
                    </nav>
                    
                    
                    
                </footer>            
                
            </div>
         </Aux>
    );
};

export default sideDrawer;

