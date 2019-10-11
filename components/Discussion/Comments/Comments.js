import React, {Component} from 'react';
import classes from './Comments.css';

class comments extends Component{
    render(){
        return(
            <div className={classes.comments}>
                <b>{this.props.name}</b>
                {this.props.comments}
            </div>
        );
    }
}

export default comments;