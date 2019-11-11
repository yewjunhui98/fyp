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
        name: "James",
        showCommentsDrawer: false,
        likes: this.props.likes,
        noofcomments: this.props.noofcomments,
        heartIcon: this.props.heartIcon,
        comments: [],
        pin: false,
        deleted: false,
        id: this.props.id
    }

    handleLikeChange = () =>{
        if(this.state.heartIcon === LikedIcon)
        {
            this.setState({heartIcon: notLikedIcon});
            if(this.state.likes>0)
                this.setState({likes: this.state.likes-1});
        }
        else
        {
            this.setState({heartIcon: LikedIcon});
            this.setState({likes: this.state.likes+1});
        }
    }

    commentsDrawerClosedHandler = () => {
        this.setState({showCommentsDrawer: false});
    }

    commentsDrawerToggleHandler = () => {
        this.setState((prevstate) => {
             return {showCommentsDrawer: !prevstate.showCommentsDrawer}
        });
    }
    myCallback = (comments, noofcomments) =>{
        this.setState({
            comments: comments,
            noofcomments: noofcomments
        })
    }
    pinCallback = (pin)=>{
        this.setState({
            pin: pin
        })
    }
    deleteCallback=(deleted)=>{
        this.setState({
            deleted: deleted
        }, ()=>this.props.deleted(this.state.id))
    }
    checkIfDeleted=()=>
    {
        if(this.state.deleted===true)
        {
            this.props.deleted(this.state.id)
        }
    }
    render(){
        return(
            <div id={this.state.id}>
                <div className={classes.header}>
                    <img src={profileIcon} alt="profileicon" className={classes.profile}/>
                    <ETC id={this.state.id} pin={this.pinCallback} deleted={this.deleteCallback}/>
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
                        {this.props.post}
                    </div>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <div className={classes.heart}>
                                <img src={this.state.heartIcon} id="changeHeart" alt="hearticon" onClick={this.handleLikeChange}/>
                                {this.state.likes} likes
                            </div>
                        </div>
                        <div className={classes.column}>
                            <div className={classes.comment}>
                                <CommentBar commentsDrawerToggleClicked={this.commentsDrawerToggleHandler} 
                                noofcomments={this.state.noofcomments}/>
                                <CommentsDrawer open={this.state.showCommentsDrawer} 
                                closed={this.commentsDrawerClosedHandler} 
                                comments={this.myCallback} 
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
                                comments={this.myCallback} 
                                name={this.state.name}/>
                </div>
            </div>
        );
    }
}

export default discussion;