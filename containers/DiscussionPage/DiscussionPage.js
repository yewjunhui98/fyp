import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import CoverPicture from '../../components/Discussion/CoverPicture/CoverPicture';
import Tips from '../../components/Discussion/Tips/Tips';
import Thoughts from '../../components/Discussion/Thoughts/Thoughts';
import Discussion from '../../components/Discussion/Discussion';
import Comments from '../../components/Discussion/Comments/Comments';

class DiscussionPage extends Component {
    state ={
        name: "James", date: new Date().toLocaleDateString(), post: "Hi", liked: true, likes: 1, comments: ["Hi"], noofcomments: 1
    }
    handleLikes = (value) => {
        this.setState({likes: value});
    }
    handleComments = (value) => {
        this.setState({noofcomments: value});
    }
    render() {
        const mappedComments = this.state.comments.length === 0 ? this.setState({noofcomments: 0}) : this.state.comments.map((value, i)=>{
            return <Comments comments = {value} key= {i}></Comments>;})
        return(
            <Aux>
                <CoverPicture></CoverPicture>
                <Thoughts></Thoughts>
                <Tips></Tips>
                <Discussion name={this.state.name} 
                date={this.state.date} 
                post={this.state.post} 
                liked={this.state.liked} 
                likes={this.state.likes} 
                noofcomments={this.state.noofcomments} 
                comments = {mappedComments}
                onLikeChange={this.handleLikes} 
                onCommentChange={this.handleComments}></Discussion>
            </Aux>
        );
    }
}

export default DiscussionPage;