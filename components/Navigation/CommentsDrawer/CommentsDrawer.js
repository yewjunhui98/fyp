import React, {Component} from 'react';
import classes from './CommentsDrawer.css';
import Aux from '../../../hoc/Aux1';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Comments from '../../Discussion/Comments/Comments';
import ProfileIcon from '../../../assets/images/person-icon.png';
import SubmitIcon from '../../../assets/images/submit.png';

class CommentsDrawer extends Component{
    state ={
        name: this.props.name,
        writtencomment: null,
        writtenname: this.props.writtenname,
        comments: this.props.comments,
        noofcomments: 0
    }
    
    createComment = () =>{
        if(this.state.comments.length===0){
            this.setState({writtenname: "James",comments: [this.state.writtencomment], noofcomments: this.state.comments.length+1}, () => this.someFn())
        }
        else{
            this.setState({writtenname: "James",comments: [...this.state.comments, this.state.writtencomment], noofcomments: this.state.comments.length+1}, ()=>this.someFn())
        }
        this.refs.input.value = "";
    }

    someFn = () =>{
        this.props.sendComments(this.state.writtenname, this.state.comments, this.state.noofcomments);
    }
    handleChange=(event)=>{
        this.setState({writtencomment: event.target.value})
    }
    render(){
    let attachedClasses = [classes.CommentsDrawer, classes.Close];
    if(this.props.open)
    {
        attachedClasses = [classes.CommentsDrawer, classes.Open];
    };

    const mappedComments = this.state.comments.map((value, i)=>{
        return <Comments image={ProfileIcon} name={this.state.name} writtenname={this.state.writtenname} comments={value} key={i}/>
    })        
    return(
        <Aux>
            <Backdrop show={this.props.open} clicked={this.props.closed}/>
            <div className={attachedClasses.join(' ')}>
                {mappedComments}
                <input type="text" id="writecomment"  ref="input" placeholder="Write a comment..."  onChange={this.handleChange}/>
                <div className={classes.submit}>
                    <img src={SubmitIcon} onClick={this.createComment} alt="submit"/>
                </div>
            </div>
        </Aux>
        );
    }
};

export default CommentsDrawer;