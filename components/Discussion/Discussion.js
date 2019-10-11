import React, {Component} from 'react';
import classes from './Discussion.css';
import profileIcon from '../../assets/images/person-icon.png';
import etcIcon from '../../assets/images/etc.png';
import notLikedIcon from '../../assets/images/unliked.png';
import LikedIcon from '../../assets/images/liked.png';
import commentIcon from '../../assets/images/comment.png';
import shareIcon from '../../assets/images/share.png';
import {Link} from 'react-router-dom';
import BottomDrawer from '../Navigation/BottomDrawer/BottomDrawer';
import bottomDrawerToggle from '../Navigation/BottomDrawer/BottomDrawerToggle/BottomDrawerToggle';

class discussion extends Component{
    state = {
        showBottomDrawer: false
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
    handleCommentChange = () =>{
        this.props.onCommentChange(this.props.noofcomments+1);
    }
    bottomDrawerClosedHandler = () =>{
        this.setState({showBottomDrawer: false});
    }
    render(){
        function showComments()
        {
            console.log("asdf");
        }
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
                        <div className={classes.comment} onClick={showComments}>
                            <img src={commentIcon} alt="commenticon"/>
                            {this.props.noofcomments} comments
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.share}>
                            <img src={shareIcon} alt="shareicon"/>
                        </div>
                    </div>
                </div>
                <h4>Comments:</h4>
            </div>
        );
    }
}

export default discussion;