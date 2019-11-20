import React, {Component} from 'react';
import profilePicture from '../../assets/images/person-icon.png';
import classes from './Profile.css';
class profile extends Component {
    render()
    {
        return(
          <div className = {classes.header}>
            <div className = {classes.picture}>
                <img src={profilePicture} alt="placeholder"></img>
            </div>
            <h2>{this.props.name}</h2>
            <h4>Software Engineer</h4>
          </div> 
        );
    }
}

export default profile;