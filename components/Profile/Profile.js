import React, {Component} from 'react';
import classes from './Profile.css';
class profile extends Component {
    render()
    {
        return(
          <div className = {classes.header}>
            <div className = {classes.picture}>
                <img src="/" alt="placeholder"></img>
            </div>
            <h2>{this.props.name}</h2>
            <h3>some type</h3>
          </div> 
        );
    }
}

export default profile;