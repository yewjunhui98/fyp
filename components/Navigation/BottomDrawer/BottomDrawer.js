import React from 'react';
import classes from './BottomDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Comments from '../../Discussion/Comments/Comments';
import Aux from '../../../hoc/Aux1';

const bottomDrawer = (props) =>
{
    let attachedClasses = [classes.bottomDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.bottomDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className ={attachedClasses.join(' ')}>
                    asdfasdf
            </div>
        </Aux>
    );
}

export default bottomDrawer;