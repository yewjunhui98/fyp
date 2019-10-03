import React, {Component} from 'react';
import classes from './ProfileDetail.css';
import Expertise from '../Expertise/Expertise';

class profiledetail extends Component {
    state = {
        expertise: ["sql", "paint"], experience: "Microsoft"
      }
    render(){
        const mappedExpertise = this.state.expertise.length === 0 ? <p>No experiences yet</p> : this.state.expertise.map((value, i)=>{
            return <Expertise expertise = {value} key= {i}></Expertise>
        ;
        })
        return(
            <div>
                <div className={classes.header}>
                    <h2>About Me</h2>
                    <hr/>
                    <p>my name is dick</p>
                    <br/>
                </div>
                <div className={classes.header}>
                    <h2>Industry and Expertise</h2>
                    <hr/>
                    {mappedExpertise}
                    <br/><br/>
                </div>
                <div className={classes.header}>
                    <h2>Work Experience</h2>
                    <hr/>
                    <p>{this.state.experience}</p>
                    <br/>
                </div>
            </div>

        );
    }
}

export default profiledetail;
