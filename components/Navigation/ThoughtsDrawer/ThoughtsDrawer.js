import React, {Component} from 'react';
import classes from './ThoughtsDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux1';
import BackIcon from '../../../assets/images/back.png';
import AttachIcon from '../../../assets/images/attach.png';
import GalleryIcon from '../../../assets/images/gallery.png';
import PhotoIcon from '../../../assets/images/photo.png';

class ThoughtsDrawer extends Component{    
    state={
        post: null
    }

    postThoughts = () =>{
        if(document.getElementById("thoughtstext").value === "")
            return;
        else{
            this.setState({post: document.getElementById("thoughtstext").value}, ()=>this.someFn())
        }
        document.getElementById("thoughtstext").value = null;
    }

    someFn = () =>{
        this.props.post(this.state.post);
    }

    render(){
        let attachedClasses = [classes.ThoughtsDrawer, classes.Close];
        if(this.props.open)
        {
            attachedClasses = [classes.ThoughtsDrawer, classes.Open];
        };
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')} onLoad={this.someFn}>
                    <img src={BackIcon} alt="backicon" onClick={this.props.closed}/>
                    <textarea id="thoughtstext" placeholder="Share your thoughts here..."/>
                    <div onClick={this.props.closed}>
                        <h3 onClick={this.postThoughts}>Post</h3>
                    </div>
                    <div className={classes.attach}>
                        <img src={AttachIcon} alt="attach"/>
                    </div>
                    <div className={classes.gallery}>
                        <img src={GalleryIcon} alt="gallery"/>
                    </div>
                    <div className={classes.photo}>
                        <img src={PhotoIcon} alt="takephoto"/>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ThoughtsDrawer;