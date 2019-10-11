import React, {Component} from 'react';
import classes from './CoverPicture.css';
import profilePicture from '../../../assets/images/picture.png';
import cameraLogo from '../../../assets/images/camera.png';

class discussion extends Component{
    render(){
        return(
            <div className={classes.header}>
                <div className={classes.coverpic}>
                    <a href="/">
                        <img src={cameraLogo} alt="camera"/>
                            Add a cover picture
                    </a>
                </div>
                <a href="/">
                    <img src={profilePicture} alt="defaultpicture"/>
                </a>
            </div>
        );
    }
}

export default discussion;