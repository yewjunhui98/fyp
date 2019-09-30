import React, {Component} from 'react';
import classes from './ProfileDetail.css';

class profiledetail extends Component {
    render(){
        return(
            <div className={classes.header}>
                <h2>About Me</h2>
                <hr/>
                <p>my name is dick</p>
                <br/>
                <h2>Industry and Expertise</h2>
                <hr/>
                <div>
                </div>
                <br/>
                <h2>Work Experience</h2>
                <hr/>
            </div>
        );
    }
}

export default profiledetail;
