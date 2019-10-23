import React, {Component} from 'react';
import classes from './CoverPicture.css';
import defaultpic from '../../../assets/images/picture.png';
import cameraLogo from '../../../assets/images/camera.png';
//import example from '../../../assets/images/example.jpg';

class discussion extends Component{
    render(){
        let clicked = false;
        function changeVisible(){
            if(clicked===false)
            {
                document.getElementById("overall").style.marginLeft = "61%";
                document.getElementById("overall").style.width = "auto";
                document.getElementById("overall").style.height = "auto";
                document.getElementById("add").style.color = "rgba(0,0,255,1)";
                document.getElementById("link").style.pointerEvents = "auto";
                document.getElementById("overall").style.transition = "all .5s linear";
                clicked = true;
            }
            else
            {
                document.getElementById("overall").style.marginLeft = "85%";
                document.getElementById("overall").style.width = "6%";
                document.getElementById("overall").style.height = "25px";
                document.getElementById("add").style.color = "rgba(0,0,255,0)";
                document.getElementById("link").style.pointerEvents = "none";
                document.getElementById("overall").style.transition = "none";
                clicked = false;
            }
        }
        return(
            <div className={classes.header}>
                    <div className={classes.coverpic} id="overall">
                        <div className={classes.image}>
                            <img src={cameraLogo} alt="camera" onClick={changeVisible}/>
                            <a href="/" id="link">
                               <p id="add">Edit cover picture</p>
                            </a>
                        </div>
                    </div>
                <a href="/">
                    <img id="default" src={defaultpic} alt="defaultpicture"/>
                </a>
            </div>
        );
    }
}

export default discussion;
