import React, {Component} from 'react';
import classes from './Comments.css';
import {Link} from 'react-router-dom';


class comments extends Component{
    render(){
        return(
            <div className={classes.header}>
                <img src={this.props.image} alt="clear"/>
                <div className={classes.comments}>
                <Link to={{pathname: `/profilePage`, search : `?name=${this.props.name}`}}>
                    <b>{this.props.name}</b>
                        </Link>
                        <br/>
                        {this.props.comments}
                    <br/>
                </div>
            </div>
        );
    }
}

export default comments;