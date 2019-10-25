import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import SearchDrawer from '../../components/Forum/Search/SearchDrawer';
import AddPostDrawer from '../../components/Forum/AddPost/AddPostDrawer';
import classes from './ForumPage.css';
import Post from '../../components/Forum/Posts/Post'

const options = {
    year: "numeric",
    month:"long",
    day:"numeric"
}

class ForumPage extends Component {
    state ={
        showSearch: false,
        showAddPost: false,
        name: "", date: new Date().toLocaleDateString("en-GB", options), title: "", post: [], tags: [], liked: false, likes: 0, comments: [], noofcomments: 0, id: 999
    }
    //~~~~~~Search handler~~~~~~
    searchClosedHandler = () => {
        this.setState({showSearch:false});
    }
    searchToggleHandler = () => {
        this.setState((prevState) => {
            return {showSearch: !prevState.showSearch};
        });
    }
    //~~~~~~Search Handler~~~~~~

    //~~~~~~Add Post handler~~~~~~
    addPostClosedHandler = () => {
        this.setState({showAddPost:false});
    }
    addPostToggleHandler = () => {
        this.setState((prevState) => {
            return {showAddPost: !prevState.showAddPost};
        });
    }
    //~~~~~~Add Post Handler~~~~~~

    myCallback = (name, date, post, liked, likes, comments, noofcomments) =>{
        this.setState({name: name, date: date, post: [...this.state.post, post], liked: liked, likes: likes, comments: comments, nofcomments: noofcomments})
    }

    render() {
        var mappedPosts = this.state.post.map((value, i)=>{
            if(value==="")
            {
                return null;
            }
            return <Post name={this.state.name} 
            date={this.state.date}
            post={value}
            liked={this.state.liked}
            likes={this.state.likes}
            comments={this.state.comments}
            noofcomments={this.state.comments.length}
            id={i}
            key={i}/>
        })
        mappedPosts.reverse();
        return(
            <Aux>                
                <div onClick={this.searchToggleHandler} className={classes.btnSearch}>Search</div>
                <SearchDrawer open={this.state.showSearch} closed={this.searchClosedHandler}/> 

                <div onClick={this.addPostToggleHandler} className={classes.btnAsk}>+</div>
                <AddPostDrawer openAdd={this.state.showAddPost} closedAdd={this.addPostClosedHandler}/> 
                   
                <h2>&nbsp;Forum Posts</h2>
                {mappedPosts}
                <Post name={"user1"} date={this.state.date} title={"Question Title"}post={["content of post..."]} tags={["Test"]} liked={false} likes={0} comments={[]} noofcomments={0} id={121}/>
                <Post name={"user2"} date={this.state.date} title={"QTitle 2"}post={["...content....."]} liked={false} likes={0} comments={[]} noofcomments={0} id={321}/>
                <br/>
            </Aux>
        );
    }
}
export default ForumPage;