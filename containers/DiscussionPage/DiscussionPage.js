import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import CoverPicture from '../../components/Discussion/CoverPicture/CoverPicture';
import Tips from '../../components/Discussion/Tips/Tips';
import Thoughts from '../../components/Discussion/Thoughts/Thoughts';
import Discussion from '../../components/Discussion/Discussion';

class DiscussionPage extends Component {
    state ={
        name: "James", date: new Date().toLocaleDateString(), post: "Hi", liked: true, likes: 1, comments: ["Hi", "Bye"], noofcomments: 0
    }
    handleLikes = (value) => {
        this.setState({likes: value});
    }
    handleComments = (value) => {
        this.setState({noofcomments: value});
    }
    render() {
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
                noofcomments={this.handleComments} 
                comments = {this.state.comments}
                onLikeChange={this.handleLikes} 
                onCommentChange={this.handleComments}></Discussion>
            </Aux>
        );
    }
}

export default DiscussionPage;