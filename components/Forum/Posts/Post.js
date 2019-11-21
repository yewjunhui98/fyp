import React, {Component} from 'react';
import classes from './Post.css';

import {Link} from 'react-router-dom';
import PostDrawer from './PostDrawer';

import commentIcon from '../../../assets/images/comment.png';
import upWhite from '../../../assets/images/up_white.jpg';
import upBlack from '../../../assets/images/up_black.jpg';
import downWhite from '../../../assets/images/down_white.jpg';
import downBlack from '../../../assets/images/down_black.jpg';


class Post extends Component{
    state = {
        showPost: false,
        desc: "",
        liked: this.props.liked,
        unliked: this.props.unliked,
        likes: this.props.likes,
        imgLiked: upWhite,
        imgUnliked: downWhite,
        noofcomments: this.props.noofcomments
    }
    postClosedHandler = () => {
        this.setState({showPost:false});
    }
    postToggleHandler = () => {
        this.setState((prevState) => {
            return {showPost: !prevState.showPost};
        });
        this.child1.updateState();
    }
    handleLike = () =>{
        if(this.state.liked)
        {
            this.setState({liked: false, likes: this.state.likes-1}, () => this.changeLikeImg());
        }
        else if(!this.state.liked && !this.state.unliked)
        {
            this.setState({liked: true, likes: this.state.likes+1}, () => this.changeLikeImg());
        }
        else
        {
            this.setState({liked: true, unliked: false, likes: this.state.likes+2}, () => this.changeLikeImg());
        }
    }
    handleUnlike = () =>{
        if(this.state.unliked)
        {
            this.setState({unliked: false, likes: this.state.likes+1}, () => this.changeLikeImg());
        }
        else if(!this.state.unliked && !this.state.liked)
        {
            this.setState({unliked: true, likes: this.state.likes-1}, () => this.changeLikeImg());
        }
        else
        {
            this.setState({unliked: true, liked: false, likes: this.state.likes-2}, () => this.changeLikeImg());
        }
    }
    callbackComments = (comments, noofcomments) =>{
        this.setState({
            comments: comments,
            noofcomments: noofcomments
        });
    }
    callbackLikes = (likes, liked, unliked) =>{
        this.setState({
            likes: likes,
            liked: liked,
            unliked: unliked
        }, () => this.changeLikeImg());
    }
    changeLikeImg = () =>{
        this.state.liked ? this.setState({imgLiked: upBlack}) : this.setState({imgLiked: upWhite});
        this.state.unliked ? this.setState({imgUnliked: downBlack}) : this.setState({imgUnliked: downWhite});
    }

    render(){
        //Check length of post description and shrink size if too long
        let desc = this.props.post+"";
        if(desc.length>=50)
        {
            desc = desc.substring(0,50)+" ...";
        }
        

        return(
            <div id={this.state.id} className={classes.postContainer}>
                <div className={classes.votes}>
                    <div><img src={this.state.imgLiked} alt="Upvote" onClick={this.handleLike}/></div>                    
                    <div><span>{this.state.likes}</span></div>
                    <div><img src={this.state.imgUnliked} alt="Downvote" onClick={this.handleUnlike}/></div>
                </div>                          
                <div className={classes.header}>
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
                    <div className={classes.title} onClick={this.postToggleHandler}>
                        {this.props.title}
                    </div>
                    <br/>
                    <div className={classes.post} onClick={this.postToggleHandler}>
                        {desc}
                    </div>
                    <div className={classes.tags}>
                        <br/>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <div className={classes.comment}>                                
                                <img src={commentIcon} alt="commentIcon" onClick={this.postToggleHandler}/>
                                <span onClick={this.postToggleHandler}>{this.state.noofcomments} comments</span>
                                <PostDrawer open={this.state.showPost} 
                                closed={this.postClosedHandler}
                                ref={(ip) => {this.child1 = ip}}
                                name={this.props.name} date={this.props.date} 
                                title={this.props.title} post={this.props.post} 
                                likes={this.state.likes} liked={this.state.liked} unliked={this.state.unliked}  callbackLikes={this.callbackLikes}
                                comments={this.props.comments} noofcomments={this.props.noofcomments} callbackComments={this.callbackComments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;