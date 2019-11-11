import React, {Component} from 'react';
import classes from './EditDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux1';
import BackIcon from '../../../assets/images/back.png';
import AttachIcon from '../../../assets/images/attach.png';
import GalleryIcon from '../../../assets/images/gallery.png';
import PhotoIcon from '../../../assets/images/photo.png';

class EditDrawer extends Component{    
    state={
        post: this.props.post,
        edit: null
    }

    handleChange=(event)=>{
        this.setState({edit: event.target.value})
    }
    editPost = ()=>{
        if(document.getElementById("edittext"+this.props.id).value === "")
    	    return;
        else{
            this.setState({edit: document.getElementById("edittext"+this.props.id).value}, ()=>this.someFn())
            console.log(this.state.edit)
        }
        let x = document.getElementById("list" + this.props.id).childNodes
        for(let i=0;i<3;i++)
        {
            x[i].style.color = "rgba(0,0,0,0)";
            x[i].style.borderColor = "rgba(0,0,0,0)";
            x[i].style.height = "auto";
            x[i].style.width = "auto";
            x[i].style.pointerEvents = "none";
            x[i].style.transition = "none";
        }
    }
    someFn=()=>{
        this.props.edit(this.state.edit);
    }
    render(){
        let attachedClasses = [classes.EditDrawer, classes.Close];
        if(this.props.open)
        {
            attachedClasses = [classes.EditDrawer, classes.Open];
        };
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')} onLoad={this.someFn}>
                    <div className={classes.back}>   
                        <img src={BackIcon} alt="backicon" onClick={this.props.closed}/>
                    </div>
                    <textarea id={"edittext"+this.props.id} placeholder="Share your thoughts here..." defaultValue={this.props.post} onChange={this.handleChange}/>
                    <div onClick={this.props.closed}>
                        <h1 onClick={this.editPost}>Post</h1>
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

export default EditDrawer;