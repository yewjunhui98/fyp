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
        liked: true,
        unliked: this.props.unliked,
        likes: this.props.likes,
        imgLiked: upWhite,
        imgUnliked: downWhite
    }
    postClosedHandler = () => {
        this.setState({showPost:false});
    }
    postToggleHandler = () => {
        this.setState((prevState) => {
            return {showPost: !prevState.showPost};
        });
    }
    handleLike = () =>{
        if(this.state.imgLiked === upBlack)
        {
            this.setState({imgLiked: upWhite});
            this.setState({likes: this.state.likes-1});
        }
        else if(this.state.imgLiked === upWhite && this.state.imgUnliked === downWhite)
        {
            this.setState({imgLiked: upBlack});
            this.setState({likes: this.state.likes+1});
        }
        else
        {
            this.setState({imgLiked: upBlack, imgUnliked: downWhite});
            this.setState({likes: this.state.likes+2});
        }
    }
    handleUnlike = () =>{
        if(this.state.imgUnliked === downBlack)
        {
            this.setState({imgUnliked: downWhite});
            this.setState({likes: this.state.likes+1});
        }
        else if(this.state.imgUnliked === downWhite && this.state.imgLiked === upWhite)
        {
            this.setState({imgUnliked: downBlack});
            this.setState({likes: this.state.likes-1});
        }
        else
        {
            this.setState({ imgUnliked: downBlack, imgLiked: upWhite});
            this.setState({likes: this.state.likes-2});
        }
    }
    myCallback = (comments, noofcomments) =>{
        this.setState({
            comments: comments,
            noofcomments: noofcomments
        })
    }

    render(){
        //Check length of post description and shrink size if too long
        let desc = this.props.post+"";
        if(desc.length>=50)
        {
            desc = desc.substring(0,50)+" ...";
        }

        //check liked
        this.liked ? this.imgLiked=upBlack : this.imgLiked=upWhite;
        this.state.unliked ? this.imgUnliked=downBlack : this.imgUnliked=downWhite;

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
                                <span onClick={this.postToggleHandler}>{this.props.noofcomments} comments</span>
                                <PostDrawer open={this.state.showPost} 
                                closed={this.postClosedHandler} 
                                name={this.props.name} date={this.props.date} title={this.props.title} post={this.props.post} noofcomments={this.props.noofcomments}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;