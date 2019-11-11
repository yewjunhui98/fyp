import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import CoverPicture from '../../components/Discussion/CoverPicture/CoverPicture';
import Tips from '../../components/Discussion/Tips/Tips';
import Thoughts from '../../components/Discussion/Thoughts/Thoughts';
import Discussion from '../../components/Discussion/Discussion';
import notLikedIcon from '../../assets/images/unliked.png';
import LikedIcon from '../../assets/images/liked.png';

class DiscussionPage extends Component {
    state ={
        name: "", date: "", post: [], liked: false, likes: 0, comments: [], noofcomments: 0, heartIcon: notLikedIcon, id: 999
    }
    myCallback = (name, date, post, liked, likes, comments, noofcomments) =>{
        this.setState({name: name, date: date, post: [...this.state.post, post], liked: liked, likes: likes, comments: comments, nofcomments: noofcomments})
    }
    deletedCallback=(id)=>
    {
        this.setState({id: id}, ()=>this.deletePosts());
    }
    deletePosts=()=>
    {
        const change = this.state.post.slice(0, this.state.id).concat(this.state.post.slice(this.state.id+1, this.state.post.length))
        this.setState({post: change})
    }


    render() {
        var mappedPosts = this.state.post.map((value, i)=>{
            if(value==="")
            {
                return null;
            }
            return <Discussion name={this.state.name} 
            date={this.state.date}
            post={value}
            liked={this.state.liked}
            likes={this.state.likes}
            comments={this.state.comments}
            noofcomments={this.state.comments.length}
            heartIcon={this.state.heartIcon}
            id={i}
            key={i}
            deleted={this.deletedCallback} />
        })
        mappedPosts.reverse();
        return(
            <Aux>
                <CoverPicture></CoverPicture>
                <Thoughts name={this.myCallback}    
                date={this.myCallback} 
                post={this.myCallback} 
                likes={this.myCallback} 
                liked={this.myCallback}
                comments={this.myCallback}
                noofcomments={this.myCallback}
                />
                <Tips></Tips>
                {mappedPosts}
                {/*post example, remove bottom lines*/}
                <Discussion name={"sir"} date={this.state.date} post={["Don't use any functions on hardcoded post"]} liked={false} likes={0} comments={[]} noofcomments={0} heartIcon={this.state.heartIcon} id={121}/>
                <Discussion name={"Mr"} date={this.state.date} post={["bye"]} liked={true} likes={1} comments={[]} noofcomments={0} heartIcon={LikedIcon} id={100}/>
            </Aux>
        );
    }
}

export default DiscussionPage;