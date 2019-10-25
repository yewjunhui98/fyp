import React, {Component} from 'react';
import classes from './Post.css';

import {Link} from 'react-router-dom';
import PostDrawer from './PostDrawer';
import ETC from '../../Discussion/ETC/ETC';

import shareIcon from '../../../assets/images/share.png';
import commentIcon from '../../../assets/images/comment.png';


class Post extends Component{
    state = {
        showPost: false,
    }
    postClosedHandler = () => {
        this.setState({showPost:false});
    }
    postToggleHandler = () => {
        this.setState((prevState) => {
            return {showPost: !prevState.showPost};
        });
    }
    myCallback = (comments, noofcomments) =>{
        this.setState({
            comments: comments,
            noofcomments: noofcomments
        })
    }

    render(){
        return(
            <div id={this.state.id} className={classes.postContainer}>
                <div className={classes.votes}><span>Vote</span></div>                          
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
                        <ETC id={this.state.id} pin={this.pinCallback} deleted={this.deleteCallback}/> 
                    </div>
                    <div className={classes.title} onClick={this.postToggleHandler}>
                        {this.props.title}
                    </div>
                    <div className={classes.post} onClick={this.postToggleHandler}>
                        {this.props.post}
                    </div>
                    <div className={classes.tags}>
                        {this.props.tags}
                    </div>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <div className={classes.comment}>
                                <img src={commentIcon} alt="commentIcon" onClick={this.postToggleHandler}/>
                                <PostDrawer open={this.state.showPost} 
                                closed={this.postClosedHandler} 
                                name={this.props.name} date={this.props.date} title={this.props.title} post={this.props.post} tags={this.props.tags}/>
                            </div>
                        </div>
                        <div className={classes.column}>
                            <div className={classes.share}>
                                <img src={shareIcon} alt="shareicon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;