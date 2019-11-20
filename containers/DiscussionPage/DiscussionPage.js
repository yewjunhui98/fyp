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
        people: [
            {
                name: "Mr",
                date: date1.toLocaleDateString("en-GB", options),
                post: "bye",
                likes: 3,
                comments: ["hello"],
                noofcomments: 0,
                id: 1000,
                heartIcon: LikedIcon,
                writtenname: ""
            },
            {
                name: "sir",
                date: date2.toLocaleDateString("en-GB", options),
                post: "asdf",
                likes: 0,
                comments: ["no"],
                noofcomments: 0,
                id: 1001,
                heartIcon: notLikedIcon,
                writtenname: ""
            }
    ],
    self: [],
        name: "", date: "", post: [], likes: 0, comments: [""], noofcomments: 0, heartIcon: notLikedIcon, writtenname: "", id: 0, pinnedpost: [], edit : null, editid: null
    }

    //callback function for self thoughts
    myCallback = (name, date, post) =>{
        this.setState({name: name, date: date, post: [...this.state.post, post]}, ()=>this.setSelf())
    }
    setSelf=()=>
    {
        for(let i=0;i<this.state.post.length;i++)
        {
            if(this.state.post[i]!==null)
            {
                var temp = {name: "", date: "", post: "", likes: 0, comments: [], noofcomments: 0, heartIcon: notLikedIcon, writtenname: "", id: i+1, edit: null, editid: null};
                temp.name = this.state.name;
                temp.date = this.state.date;
                temp.post = this.state.post[i];
                if(this.state.self[i-1]!==temp)
                {
                    this.setState({self: [...this.state.self, temp]});                
                }
            }
        }
    }
    likesCallback = (id, likes, heartIcon)=>
    {
        this.setState({id: id, likes: likes,heartIcon: heartIcon}, ()=>this.changeLikes());
    }
    changeLikes=()=>{
        if(this.state.id>999)
        {
            const array = this.state.people;
            for(let i=0;i<this.state.people.length;i++)
            {             
                if(this.state.people[i].id === this.state.id)
                {
                    const temp = this.state.people[i];
                    temp.likes = this.state.likes;
                    temp.heartIcon = this.state.heartIcon;
                    array[i] = temp;
                    this.setState({people: array});
                }
            }
        }
        if(this.state.id<5)
        {
            const array = this.state.pinnedpost;
            const temp = this.state.pinnedpost[this.state.id];
            temp.likes = this.state.likes;
            temp.heartIcon = this.state.heartIcon;
            array[this.state.id] = temp;
            this.setState({pinnedpost: array});
        }
    }
    commentsCallback=(id, writtenname, comments, noofcomments)=>{
        this.setState({id: id, writtenname: writtenname, comments: comments, noofcomments: noofcomments}, ()=>this.changeComments())
    }
    changeComments=()=>
    {
        if(this.state.id>999)
        {
            const array = this.state.people;
            for(let i=0;i<this.state.people.length;i++)
            {
                if(this.state.people[i].id === this.state.id)
                {
                    const temp = this.state.people[i];
                    temp.comments = this.state.comments;
                    temp.noofcomments = this.state.noofcomments;
                    temp.writtenname = this.state.writtenname;
                    array[i] = temp;
                    this.setState({people: array});
                }
            }
        }
        if(this.state.id<5)
        {
            const array = this.state.pinnedpost;
            const temp = this.state.pinnedpost[this.state.id];
            temp.comments = this.state.comments;
            temp.noofcomments = this.state.noofcomments;
            temp.writtenname = this.state.writtenname;
            array[this.state.id] = temp;
            this.setState({pinnedpost: array});
        }
    }
    //callback function for deleted post
    deletedCallback=(id)=>
    {
        this.setState({id: id}, ()=>this.deletePosts())
    }
    //function to delete post
    deletePosts=()=>{
        if(this.state.id>4 && this.state.id<1000)
        {
            var change = this.state.self;
            for(let i=0;i<change.length;i++)
            {
                if(change[i].id === this.state.id)
                {
                    let temp = change[i];
                    change = change.filter(function(unpinned){
                        return unpinned !== temp
                    })
                }
            }
            this.setState({self: change});
        }
    }
    //callback function to pin post
    pinnedCallback=(id)=>
    {
        this.setState({id: id},()=>this.PinorUnpin())
    }
    // e = event trigger such as button
    //function to pin or unpin post
    PinorUnpin=()=>{
        //Pin
        //unpinned post

        if(this.state.id >4 && this.state.id<1000)
        {
            if(this.state.pinnedpost.length===5)
            {
                alert("Only 5 post may be pinned at a time");
                return;
            }
            var temp;
            for(let i=0;i<this.state.self.length;i++)
            {
                if(this.state.self[i].id === this.state.id)
                {
                    temp = this.state.self[i];
                }
            }
            this.setState({pinnedpost: [...this.state.pinnedpost, temp]})
            this.setState({self: this.state.self.filter(function(pinned){
                return pinned !== temp
            })});
            this.state.pinnedpost.reverse();
        }
        //hardcoded post
        if(this.state.id > 999)
        {
            if(this.state.pinnedpost.length===5)
            {
                alert("Only 5 post may be pinned at a time");
                return;
            }
            var changed;
            for(let i=0;i<this.state.people.length;i++)
            {
                if(this.state.people[i].id === this.state.id)
                {
                    changed = this.state.people[i];
                }
            }
            this.setState({pinnedpost: [...this.state.pinnedpost, changed]})
            this.setState({people: this.state.people.filter(function(pinned){
                return pinned !==  changed
            })});
            this.state.pinnedpost.reverse();
        }
        //Unpin
        if(this.state.id<=4)
        {
           if(this.state.pinnedpost[this.state.id].name !== this.state.name)
           {
                const unpinned = this.state.pinnedpost[this.state.id];
                let change = this.state.pinnedpost[this.state.id];
                this.setState({people: [...this.state.people, unpinned]});
                this.setState({pinnedpost: this.state.pinnedpost.filter(function(pinned){
                return pinned !== change
            })})
           }
           else
           {
                let change = this.state.pinnedpost[this.state.id];
                this.setState({self: [...this.state.self, change]});
                this.setState({pinnedpost: this.state.pinnedpost.filter(function(pinned){
                return pinned !== change
            })})
           }

        }
    }
    //double callback id and edit
    editCallback=(edit, id)=>
    {
        this.setState({edit: edit, editid: id}, ()=>this.editPost())
    }
    //function to edit post
    editPost=()=>
    {
        if(this.state.edit!==null)
        {
            for(let i=0;i<this.state.self.length;i++)
            {
                if(this.state.self[i].id === this.state.editid)
                {
                    var editpost = this.state.self[i];
                }
            }
            editpost.post = this.state.edit;
            var temparray = this.state.self;
            for(let i=0;i<temparray.length;i++)
            {
                if(temparray[i].id === editpost.id)
                {
                    temparray[i] = editpost;
                }
            }
            this.setState({self: temparray});
            this.state.self.reverse();
        }
    }
    render() {
        const otherPeople = this.state.people.map((value, i)=>
        {
            return <Discussion name={value.name}
            date={value.date}
            post={value.post}
            likes={value.likes}
            comments={value.comments}
            noofcomments={value.comments.length}
            heartIcon={value.heartIcon}
            writtenname = {value.writtenname}
            id={value.id}
            key={value.id}
            changeLikes={this.likesCallback}
            changeComments={this.commentsCallback}
            pinned={this.pinnedCallback}
            deleted={this.deletedCallback}
            edit={this.editCallback}
            />
        })
        var thoughtPosts = this.state.self.map((value, i)=>{
            return <Discussion name={value.name}
            date={value.date}
            post={value.post}
            liked={value.liked}
            likes={value.likes}
            comments={value.comments}
            noofcomments={value.noofcomments}
            heartIcon={value.heartIcon}
            writtenname = {value.writtenname}
            id={value.id}
            key={i}
            changeLikes={this.likesCallback}
            changeComments={this.commentsCallback}
            pinned={this.pinnedCallback}
            deleted={this.deletedCallback}
            edit={this.editCallback}
            />
        })
        thoughtPosts.reverse();
        var pinnedPosts = this.state.pinnedpost.map((value, i)=>{
            return <Discussion name={value.name}
            date={value.date}
            post={value.post}
            likes={value.likes}
            comments={value.comments}
            noofcomments={value.comments.length}
            heartIcon={value.heartIcon}
            writtenname = {value.writtenname}
            id={i}
            key={i}
            changeLikes={this.likesCallback}
            changeComments={this.commentsCallback}
            pinned={this.pinnedCallback}
            deleted={this.deletedCallback}
            edit={this.editCallback}
             />
        })
        pinnedPosts.reverse();
        return(
            <Aux>
                <CoverPicture/>
                <Thoughts name={this.myCallback}
                date={this.myCallback}
                post={this.myCallback}
                />
                <Tips/>
                {pinnedPosts}
                {thoughtPosts}
                {/*post example, remove bottom lines*/}
                {otherPeople}
            </Aux>
        );
    }
}

export default DiscussionPage;