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
                    <Link to="/discussion" onClick={props.closed}>Discussion</Link> <br/>
                    <Link to="/forum" onClick={props.closed}>Forum</Link> <br/>
                    <Link to="/members" onClick={props.closed}>Members</Link> <br/>
                    <br/>
                    <b>Portals</b> <br/><br/>
                    Portals..
                    <br/><br/>
                    <b>Report a Problem</b> <br/><br/>
                    Report
                    
                </footer>            
                
            </div>
         </Aux>
    );
};

export default sideDrawer;

