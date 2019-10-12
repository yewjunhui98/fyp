import React, {Component} from 'react';
import classes from './Discussion.css';
import profileIcon from '../../assets/images/person-icon.png';
import etcIcon from '../../assets/images/etc.png';
import notLikedIcon from '../../assets/images/unliked.png';
import LikedIcon from '../../assets/images/liked.png';
import shareIcon from '../../assets/images/share.png';
import {Link} from 'react-router-dom';
import CommentsDrawer from '../Navigation/CommentsDrawer/CommentsDrawer';
import CommentBar from '../Navigation/CommentBar/CommentBar';

class discussion extends Component{
    state = {
        showCommentsDrawer: false
    }
    handleLikeChange = () =>{
        if(document.getElementById("changeHeart").src === LikedIcon)
        {
            document.getElementById("changeHeart").src = notLikedIcon;
            this.props.onLikeChange(this.props.likes-1);
        }
        else
        {
            document.getElementById("changeHeart").src = LikedIcon;
            this.props.onLikeChange(this.props.likes+1);
        }
    }

    commentsDrawerClosedHandler = () => {
        this.setState({showCommmentsDrawer: false});
    }

    commentsDrawerToggleHandler = () => {
        this.setState((prevstate) => {
            return {showCommentsDrawer: !prevstate.showCommentsDrawer}
        });
    }
    render(){
        let liked;
        if(this.props.liked === true)
        {
            liked = LikedIcon;
        }
        else{
            liked = notLikedIcon;
        }
        return(
            <div className={classes.header}>
                <img src={profileIcon} alt="profileicon" className={classes.profile}/>
                <img src={etcIcon} alt="etcicon" className={classes.etc}/>
                <div className={classes.profileheader}>
                <Link to={{pathname: `/profilePage`, search : `?name=${this.props.name}`}}>
                           <strong>{this.props.name}</strong>
                        </Link>
                    <br/>
                    {this.props.date}
                    <div className={classes.post}>
                        {this.props.post}
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div className={classes.heart}>
                            <img src={liked} id="changeHeart" alt="hearticon" onClick={this.handleLikeChange}/>
                            {this.props.likes} likes
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.comment}>
                            <CommentBar commentsDrawerToggleClicked ={this.commentsDrawerToggleHandler} noofcomments = {this.props.comments.length}/>
                         <CommentsDrawer open={this.state.showCommentsDrawer}
                            closed={this.commentsDrawerClosedHandler} comments={this.props.comments} name={this.props.name}/>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.share}>
                            <img src={shareIcon} alt="shareicon"/>
                        </div>
                    </div>
                </div>
                <div className={classes.selfcomment}>
                <h4>Comments:</h4>
                </div>
            </div>
        );
    }
}

export default discussion;