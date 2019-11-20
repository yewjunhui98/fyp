import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import icon from '../../../assets/images/icon.png';
import classes from './Member.css';
class Member extends Component {
    render(){
        let displayposition;
        if(this.props.position!=="null")
        {
           displayposition = (<p>{this.props.position}</p>);
        }
        else{
            displayposition= null;
        }
        return(
            <div className={classes.fixedDiv}>
                <div className = {this.props.fade? classes.fade:classes.pHide}>
                </div>
                <div className={classes.link}>
                    
                    <div className={classes.image}>
                        <img src={icon} alt="ProfileIcon" height="30px" />
                    </div>
                    <div className={classes.name}>
                        <Link to={{pathname: `/profilePage`, search : `?name=${this.props.name}`}}>
                            <p>{this.props.name} </p>
                        </Link>
                        <div className={classes.position}>
                            {displayposition}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Member;