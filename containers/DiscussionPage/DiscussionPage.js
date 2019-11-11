import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import CoverPicture from '../../components/Discussion/CoverPicture/CoverPicture';
import Tips from '../../components/Discussion/Tips/Tips';
import Thoughts from '../../components/Discussion/Thoughts/Thoughts';
import Discussion from '../../components/Discussion/Discussion';
import notLikedIcon from '../../assets/images/unliked.png';
import LikedIcon from '../../assets/images/liked.png';


const options = {
    year: "numeric",
    month:"long",
    day:"numeric"}

let date1 = new Date(1997, 5, 20);
let date2 = new Date(2012, 9, 11);


//POST WITH ID>999 ARE HARDCODED, POST WITH ID<4 ARE PINNED AND IN BETWEEN ARE UNPINNED THOUGHTS
class DiscussionPage extends Component {

    state ={
        name: "", date: "", post: [""], liked: false, likes: 0, comments: [], noofcomments: 0, heartIcon: notLikedIcon, id: 999, pinnedpost: [], edit : null, editid: null
    }
    myCallback = (name, date, post, liked, likes, comments, noofcomments) =>{
        this.setState({name: name, date: date, post: [...this.state.post, post], liked: liked, likes: likes, comments: comments, nofcomments: noofcomments})
    }
    deletedCallback=(id)=>
    {
        this.setState({id: id}, ()=>this.deletePosts())
    }
    deletePosts=()=>{
        if(this.state.id>999)
        {
            document.getElementById(this.state.id).innerHTML = null;
        }
        if(this.state.id>4 && this.state.id<999)
        {
            const change = this.state.post.slice(0, this.state.id).concat(this.state.post.slice(this.state.id+1, this.state.post.length));
            this.setState({post: change})
        }
        else
        {
            const change = this.state.pinnedpost.slice(0, this.state.id).concat(this.state.pinnedpost.slice(this.state.id+1, this.state.pinnedpost.length));
            this.setState({pinnedpost: change})
        }
    }

    pinnedCallback=(id)=>
    {
        this.setState({id: id},()=>this.PinorUnpin())
    }
    PinorUnpin=()=>{
        //Pin
        if(this.state.id>4)
        {
            if(this.state.pinnedpost.length===5)
            {
                alert("Only 5 post may be pinned at a time");
                return;
            }
            var pinned = this.state.post.splice(this.state.id, 1);
            this.setState({pinnedpost: [...this.state.pinnedpost, pinned[0]]})
            this.state.pinnedpost.reverse();
        }
        //Unpin
        if(this.state.id<=4)
        {
            var unpinned = this.state.pinnedpost.splice(this.state.id, 1);
            this.setState({post: [...this.state.post, unpinned[0]]})
            this.state.post.reverse();
        }
    }
    //double callback id and edit
    editCallback=(edit, id)=>
    {
        this.setState({edit: edit, editid: id}, ()=>this.editPost())
    }
    editPost=()=>
    {
        if(this.state.edit!==null)
        {
            var editpost = this.state.post;
            console.log(editpost)
            console.log(this.state.edit)
            editpost[this.state.editid] = this.state.edit;
            console.log(editpost)
            this.setState({post: editpost})
        }
    }
    render() {
        var thoughtPosts = this.state.post.map((value, i)=>{
            if(value==="")
            {
                return null;
            }
            if(i===this.state.editid && this.state.edit!==null)
            {
                value = this.state.edit;
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
            pinned={this.pinnedCallback}
            deleted={this.deletedCallback}
            edit={this.editCallback}
            editid={this.editCallback}
            />
        })
        thoughtPosts.reverse();
        var pinnedPosts = this.state.pinnedpost.map((value, i)=>{
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
            pinned={this.pinnedCallback}
            deleted={this.deletedCallback}
            edit={this.editCallback}
            editid={this.editCallback}
             />
        })
        pinnedPosts.reverse();
        return(
            <Aux>
                <CoverPicture/>
                <Thoughts name={this.myCallback}
                date={this.myCallback}
                post={this.myCallback}
                likes={this.myCallback}
                liked={this.myCallback}
                comments={this.myCallback}
                noofcomments={this.myCallback}
                />
                <Tips/>
                {pinnedPosts}
                {thoughtPosts}
                {/*post example, remove bottom lines*/}
                <Discussion name={"sir"}
                date={date2.toLocaleDateString("en-GB", options)}
                post={"Don't use any functions on hardcoded post"}
                liked={false}
                likes={0}
                comments={[]}
                noofcomments={0}
                heartIcon={this.state.heartIcon}
                id={1210}
                pinned={this.pinnedCallback}
                deleted={this.deletedCallback} 
                edit={this.editCallback}
                editid={this.editCallback}/>
                <Discussion name={"Mr"}
                date={date1.toLocaleDateString("en-GB", options)}
                post={"bye"}
                liked={true}
                likes={1}
                comments={[]}
                noofcomments={0}
                heartIcon={LikedIcon}
                id={1000}
                pinned={this.pinnedCallback}
                deleted={this.deletedCallback}
                edit={this.editCallback}
                editid={this.editCallback} />
            </Aux>
        );
    }
}

export default DiscussionPage;