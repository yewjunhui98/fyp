import React, {Component} from 'react';
import classes from './Comments.css';
import {Link} from 'react-router-dom';


class comments extends Component{
    state = {
        name: this.props.name,
        writtenname: this.props.writtenname,
        comments: this.props.comments
    }
    changeName=()=>
    {
        if(this.state.writtenname!==undefined)
        {
            return this.state.writtenname
        }
        else
        {
            return this.state.name
        }
    }
    render(){
        const commentname = this.changeName();
        return(
            <div className={classes.header}>
                <img src={this.props.image} alt="clear"/>
                <div className={classes.comments}>
                <Link to={{pathname: `/profilePage`, search : `?name=${this.props.name}`}}>
                    <b>{commentname}</b>
                        </Link>
                        <br/>
                        {this.state.comments}
                    <br/>
                </div>
            </div>
        );
    }
}

export default comments;