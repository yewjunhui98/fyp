import React, {Component} from 'react';
import classes from './Expertise.css';

class expertise extends Component{
     render(){ 
        return(
            <div className = {classes.expertise}>
                {this.props.expertise}
            </div>
        );
    }
}

export default expertise;