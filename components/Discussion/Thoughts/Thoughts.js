import React, {Component} from 'react';
import classes from './Thoughts.css';
import personIcon from '../../../assets/images/person-icon.png';

class thoughts extends Component{
    render(){
        return(
            <div className={classes.header}>
                <img src={personIcon} alt="personicon"/>
                <div className={classes.input}>
                    <h4>Share your thoughts!</h4>
                </div>
            </div>
        );
    }
}

export default thoughts;