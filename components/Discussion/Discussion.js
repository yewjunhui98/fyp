import React, {Component} from 'react';
import classes from './Discussion.css';
import profileIcon from '../../assets/images/person-icon.png';
import notLikedIcon from '../../assets/images/unliked.png';
import LikedIcon from '../../assets/images/liked.png';
import shareIcon from '../../assets/images/share.png';
import {Link} from 'react-router-dom';
import CommentsDrawer from '../Navigation/CommentsDrawer/CommentsDrawer';
import CommentBar from '../Navigation/CommentBar/CommentBar';
import WriteCommentBar from '../Navigation/WriteCommentBar/WriteCommentBar';
import ETC from '../Discussion/ETC/ETC';

class discussion extends Component{
    state = {
        name: this.props.name,
        showCommentsDrawer: false,
        likes: this.props.likes,
        noofcomments: this.props.noofcomments,
        heartIcon: this.props.heartIcon,
        writtenname: this.props.writtenname,
        comments: this.props.comments,
        post: this.props.post,
        pin: false,
        deleted: false,
        id: this.props.id,
        edit: this.props.edit
    }
    handleLikeChange = () =>{
        if(this.state.heartIcon === LikedIcon)
        {
            this.setState({heartIcon: notLikedIcon});
            if(this.state.likes>0)
                this.setState({likes: this.state.likes-1}, ()=>this.sendLikes());
        }
        else
        {
            this.setState({heartIcon: LikedIcon});
            this.setState({likes: this.state.likes+1}, ()=>this.sendLikes());
        }
    }
    sendLikes=()=>
    {
        this.props.changeLikes(this.state.id, this.state.likes, this.state.heartIcon);
    }

    myCallback = (writtenname, comments, noofcomments) =>{
        this.setState({
            writtenname: writtenname,
            comments: comments,
            noofcomments: noofcomments
        }, ()=>this.sendComments())
    }

    sendComments=()=>
    {
        this.props.changeComments(this.state.id, this.state.writtenname, this.state.comments, this.state.noofcomments);
    }
    commentsDrawerClosedHandler = () => {
        this.setState({showCommentsDrawer: false});
    }

    commentsDrawerToggleHandler = () => {
        this.setState((prevstate) => {
             return {showCommentsDrawer: !prevstate.showCommentsDrawer}
        });
    }

    deleteCallback=(id)=>{
        this.setState({
            id: id
        }, ()=>this.props.deleted(this.state.id))
    }

    pinnedCallback=(id)=>{
        this.setState({
            id: id
        }, ()=>this.props.pinned(this.state.id))
    }

    editCallback=(edit)=>{
        this.setState({
            edit: edit
        },()=>this.sendEdit())
    }

    sendEdit=()=>{
        if(this.state.edit!==null)
        {
            this.setState({post: this.state.edit})
            this.props.edit(this.state.edit, this.state.id)
        }
    }

    render(){
        return(
            <div id={this.props.id}>
                <div className={classes.header}>
                    <img src={profileIcon} alt="profileicon" className={classes.profile}/>
                    <ETC id={this.state.id} pin={this.pinnedCallback} deleted={this.deleteCallback} post={this.state.post} edit={this.editCallback}/>
                    <div className={classes.profileheader}>
                    <Link to={{pathname: `/profilePage`, search : `?name=${this.props.name}`}}>
                            <strong>{this.props.name}</strong>
                            </Link>
                        <br/>
                        <div className={classes.date}>
                            {this.props.date}
                        </div>
                    </div>
                    <div className={classes.post}>
                        {this.state.post}
                    </div>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <div className={classes.heart} onClick={this.handleLikeChange}>
                                <img src={this.state.heartIcon} id="changeHeart" alt="hearticon"/>
                                {this.state.likes} likes
                            </div>
                        </div>
                        <div className={classes.column}>
                            <div className={classes.comment}>
                                <CommentBar commentsDrawerToggleClicked={this.commentsDrawerToggleHandler} 
                                noofcomments={this.state.noofcomments}/>
                                <CommentsDrawer open={this.state.showCommentsDrawer} 
                                closed={this.commentsDrawerClosedHandler}
                                comments={this.state.comments}
                                sendComments={this.myCallback} 
                                name={this.state.name}/>
                            </div>
                        </div>
                        <div className={classes.column}>
                            <div className={classes.share}>
                                <img src={shareIcon} alt="shareicon"/>
                            </div>
                        </div>
                    </div>
                    <WriteCommentBar writeCommentDrawerToggleClicked={this.commentsDrawerToggleHandler}/>
                    <CommentsDrawer open={this.state.showCommentsDrawer} 
                                closed={this.commentsDrawerClosedHandler} 
                                comments={this.state.comments}
                                sendComments={this.myCallback} 
                                name={this.state.name}/>
                </div>
            </div>
        );
    }
}

export default discussion;