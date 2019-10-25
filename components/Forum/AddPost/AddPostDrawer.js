import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
import classes from './AddPostDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

import BackIcon from '../../../assets/images/back.png';


class postDrawer extends Component{
    render()
    {
        let attachedClasses = [classes.AddPostDrawer, classes.Close];
        if(this.props.openAdd)
        {
            attachedClasses = [classes.AddPostDrawer, classes.Open];
        }
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <div>
                        <img src={BackIcon} alt="backicon" onClick={this.props.closedAdd} className={classes.backIcon}/>
                    </div>
                    <br/>
                    <div>
                        <h1>Add Post</h1>
                    </div>
                  
                </div>
            </Aux>
        )
    }    
}

export default postDrawer;