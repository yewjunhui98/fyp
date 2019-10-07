import React, {Component} from 'react';
import classes from './CoverPicture.css';
import profilePicture from '../../../assets/images/picture-icon.jpg';
import cameraLogo from '../../../assets/images/camera-icon.png';

class discussion extends Component{
    render(){
        return(
            <div className={classes.header}>
                <div className={classes.coverpic}>
                <img src={cameraLogo} alt="camera"/>
                    Add a cover picture
                </div>
                <img src={profilePicture} alt="defaultpicture"/>
            </div>
        );
    }
}

export default discussion;