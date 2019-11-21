import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
import classes from './PostDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Comments from '../../Discussion/Comments/Comments'
import {Link} from 'react-router-dom';

import closeIcon from '../../../assets/images/close.png';
import commentIcon from '../../../assets/images/comment.png';
import ProfileIcon from '../../../assets/images/person-icon.png';
import SubmitIcon from '../../../assets/images/submit.png';
import upWhite from '../../../assets/images/up_white.jpg';
import upBlack from '../../../assets/images/up_black.jpg';
import downWhite from '../../../assets/images/down_white.jpg';
import downBlack from '../../../assets/images/down_black.jpg';


class postDrawer extends Component{
    state ={
        name: this.props.name,
        writtencomment: null,
        comments: this.props.comments,
        liked: this.props.liked,
        unliked: this.props.unliked,
        likes: this.props.likes,
        imgLiked: upWhite,
        imgUnliked: downWhite,
        noofcomments: 0
    }
    updateState = () =>{
        this.setState({likes:this.props.likes, liked:this.props.liked, unliked:this.props.unliked}, () => this.setLikes());
    }
    createComment = () =>{
        if(this.state.writtencomment == null){return false;}
        if(this.state.comments.length===0){
            this.setState({comments: [this.state.writtencomment], noofcomments: this.state.comments.length+1}, () => this.props.callbackComments(this.state.comments, this.state.noofcomments))
        }
        else{
            this.setState({comments: [...this.state.comments, this.state.writtencomment], noofcomments: this.state.comments.length+1}, () => this.props.callbackComments(this.state.comments, this.state.noofcomments))
        }        
        this.refs.input.value = "";
        this.setState({writtencomment: null});
    }
    handleChange=(event)=>{
        this.setState({writtencomment: event.target.value})
    }
    handleLike = () =>{
        if(this.state.liked)
        {
            this.setState({liked: false, likes: this.state.likes-1}, () => this.setLikes());
        }
        else if(!this.state.liked && !this.state.unliked)
        {
            this.setState({liked: true, likes: this.state.likes+1}, () => this.setLikes());
        }
        else
        {
            this.setState({liked: true, unliked: false, likes: this.state.likes+2}, () => this.setLikes());
        }
    }
    handleUnlike = () =>{
        if(this.state.unliked)
        {
            this.setState({unliked: false, likes: this.state.likes+1}, () => this.setLikes());
        }
        else if(!this.state.unliked && !this.state.liked)
        {
            this.setState({unliked: true, likes: this.state.likes-1}, () => this.setLikes());
        }
        else
        {
            this.setState({unliked: true, liked: false, likes: this.state.likes-2}, () => this.setLikes());
        }
    }
    setLikes = () =>{
        this.state.liked ? this.setState({imgLiked: upBlack}) : this.setState({imgLiked: upWhite});
        this.state.unliked ? this.setState({imgUnliked: downBlack}) : this.setState({imgUnliked: downWhite});
        this.props.callbackLikes(this.state.likes, this.state.liked, this.state.unliked);
    }
    render()
    {
        let attachedClasses = [classes.PostDrawer, classes.Close];
        if(this.props.open)
        {
            attachedClasses = [classes.PostDrawer, classes.Open];
        }
        const mappedComments = this.state.comments.map((value, i)=>{
            return <Comments image={ProfileIcon} name={this.state.name} comments={value} key={i}/>
        })   
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <div>
                        <img src={closeIcon} alt="closeicon" onClick={this.props.closed} className={classes.backIcon}/>
                    </div>                     
                    <div className={classes.fullPost}>
                        <div className={classes.votes}>
                            <div><img src={this.state.imgLiked} alt="Upvote" onClick={this.handleLike}/></div>                    
                            <div><span>{this.state.likes}</span></div>
                            <div><img src={this.state.imgUnliked} alt="Downvote" onClick={this.handleUnlike}/></div>
                        </div>
                        <div>
                            <div className={classes.profileheader}>
                                <span>Posted by </span>
                                <Link to={{pathname: `/profilePage`, search : `?name=${this.props.name}`}} className={classes.userName}>
                                        <strong>{this.props.name}</strong>
                                </Link>
                                &nbsp;&nbsp;&nbsp;
                                <span className={classes.date}>
                                    {this.props.date}
                                </span> 
                            </div>     
                            <div className={classes.title}>
                                {this.props.title}
                            </div>
                                        
                            <div className={classes.post}>
                                {this.props.post}
                            </div>
                            
                            <div className={classes.tags}>
                            </div>
                        </div>                                                 
                    </div>
                    <div className={classes.commentHead}>
                        <div className={classes.row}>
                            <div className={classes.column}>
                                <div className={classes.comment}>
                                    <img src={commentIcon} alt="commentIcon"/>
                                    {this.state.noofcomments} comments                               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.commentSec}>                        
                        {mappedComments}
                    </div>
                    <div className={classes.writeCom}>
                        <textarea id="writecomment" ref="input" placeholder="Write a comment..."onChange={this.handleChange}/> 
                        <img src={SubmitIcon} onClick={this.createComment} alt="submit"/>   
                    </div>
                                      
                </div>
            </Aux>
        )
    }    
}

export default postDrawer;