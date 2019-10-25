import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
import classes from './PostDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {Link} from 'react-router-dom';

import closeIcon from '../../../assets/images/close.png';


class postDrawer extends Component{
    render()
    {
        let attachedClasses = [classes.PostDrawer, classes.Close];
        if(this.props.open)
        {
            attachedClasses = [classes.PostDrawer, classes.Open];
        }
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <div>
                        <img src={closeIcon} alt="closeicon" onClick={this.props.closed} className={classes.backIcon}/>
                    </div>
                    <div className={classes.profileheader}>
                        <span>Posted by </span>
                        <Link to={{pathname: `/profilePage`, search : `?name=${this.props.name}`}} className={classes.userName}>
                                <strong>{this.props.name}</strong>
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <span className={classes.date}>
                            {this.props.date}
                        </span> 
                    </div>     
                    <div className={classes.title}>
                        {this.props.title}
                    </div>
                                   
                    <div className={classes.post}>
                        {this.props.post}
                    </div>
                    <div className={classes.tags}>
                        {this.props.tags}
                    </div>
                  
                </div>
            </Aux>
        )
    }    
}

export default postDrawer;