import React, {Component} from 'react';
import classes from './Thoughts.css';
import personIcon from '../../../assets/images/person-icon.png';
import ThoughtsDrawer from '../../Navigation/ThoughtsDrawer/ThoughtsDrawer';
import ThoughtsBar from '../../Navigation/ThoughtsBar/ThoughtsBar';

const options = {
    year: "numeric",
    month:"long",
    day:"numeric"}

//ENTER CURRENT USER TO THIS STATE
class thoughts extends Component{
    state ={
        showThoughtsDrawer: false,
        name: "James",
        date: new Date().toLocaleDateString("en-GB", options),
        post: null, 
        liked: false, 
        likes: 0, 
        comments: [], 
        noofcomments: 0

    }
    myCallback = (post) =>{
        this.setState({post: post}, ()=>{this.someFn()});
    }

    someFn = () =>{
        this.props.name(this.state.name, this.state.date, this.state.post, this.state.liked, this.state.likes, this.state.comments, this.state.noofcomments);
    }

    thoughtsDrawerClosedHandler = () => {
        this.setState({showThoughtsDrawer: false});
    }
    thoughtsDrawerToggleHandler = () => {
        this.setState((prevstate) => {
            return {showThoughtsDrawer: !prevstate.showThoughtsDrawer}
        });
    }
    render(){
        return(
            <div className={classes.header}>    
                <img src={personIcon} alt="personicon"/>
                    <div>
                        <ThoughtsBar thoughtsDrawerToggleClicked={this.thoughtsDrawerToggleHandler}/>
                        <ThoughtsDrawer
                            open={this.state.showThoughtsDrawer} 
                            closed={this.thoughtsDrawerClosedHandler}
                            post={this.myCallback}
                            />
                     </div>
            </div>
        );
    }
}

export default thoughts;