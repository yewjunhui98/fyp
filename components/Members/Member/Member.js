import React, {Component} from 'react';
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
                    
                    <div>
                        <img src={icon} alt="ProfileIcon" height="30px" />
                    </div>
                    <div>
                        <a href="/">
                            {this.props.name} 
                        </a>
                        {displayposition}
                    </div>
                </div>
            </div>
        );
    }
}


export default Member;