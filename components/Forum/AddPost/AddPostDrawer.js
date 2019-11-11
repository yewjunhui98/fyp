import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
import classes from './AddPostDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

import BackIcon from '../../../assets/images/back.png';

const options = {
    year: "numeric",
    month:"long",
    day:"numeric"
}

class postDrawer extends Component{
    state={
        name: "James",
        date: new Date().toLocaleDateString("en-GB", options),
        title: "",
        post: "", 
        liked: false, 
        likes: 0, 
        comments: [], 
        noofcomments: 0
    }

    myCallback = (post, title) =>{
        this.setState({name: this.state.name, 
            date: this.state.date,
            title: title, 
            post: post, 
            liked: false, 
            likes: 0, 
            comments: [], 
            noofcomments: 0}, ()=>{this.someFn()});
    }

    postQuestion = () =>{
        if(document.getElementById("txtPost").value === "" || document.getElementById("txtTitle").value === "")
            return;
        this.setState({post: document.getElementById("txtPost").value, title: document.getElementById("txtTitle").value}, ()=>this.someFn())
        document.getElementById("txtPost").value = null;
        document.getElementById("txtTitle").value = null;
        this.props.closedAdd()
    }

    someFn = () =>{
        this.props.name(this.state.name, this.state.date, this.state.title, this.state.post, this.state.liked, this.state.likes, this.state.comments, this.state.noofcomments);
    }
    render()
    {
        let attachedClasses = [classes.AddPostDrawer, classes.Close];
        if(this.props.openAdd)
        {
            attachedClasses = [classes.AddPostDrawer, classes.Open];
        }
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <div>
                        <img src={BackIcon} alt="backicon" onClick={this.props.closedAdd} className={classes.backIcon}/>
                    </div>
                    <br/>
                    <div>
                        <br/>
                        <hr/>
                        <span>Ask a Question!</span>
                        <hr/>
                        <h2>&nbsp;Title</h2>
                        <textarea id="txtTitle" className={classes.txtTitle} placeholder="Enter Title of your Question"/>
                        <br/>
                        <h2>&nbsp;Description</h2>
                        <textarea id="txtPost" className={classes.txtPost} placeholder="Enter description of your Question"/>
                        <div onClick={this.props.closed}>
                            <div onClick={this.postQuestion} className={classes.btnPost}>Post</div>
                        </div>
                    </div>
                  
                </div>
            </Aux>
        )
    }    
}

export default postDrawer;