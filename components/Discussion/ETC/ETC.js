import React, {Component} from 'react';
import classes from './ETC.css';
import etcIcon from '../../../assets/images/etc.png';
import EditBar from '../../DiscussionDrawer/EditBar/EditBar';
import EditDrawer from '../../DiscussionDrawer/EditDrawer/EditDrawer';

let clicked = false;

class ETC extends Component
{    
    state={
        id: this.props.id,
        post: this.props.post,
        edit: null,
        showEditDrawer: false
    }
    options=()=>{
        let x = document.getElementById("list" + this.props.id).childNodes
        let size
        if(this.state.id>4 && this.state.id<1000)
        {
            size = 3;
        }
        else
        {
            size = 1;
            x[1].innerHTML = null;
            x[2].innerHTML = null;
        }
        if(clicked === false)
        {
            for(let i=0;i<size;i++)
            {
                x[i].style.color = "rgba(95, 95, 95, 1)";
                x[i].style.borderColor = "black";
                x[i].style.backgroundColor = "rgba(255, 255, 255, 1)";
                x[i].style.height = "auto";
                x[i].style.width = "auto";
                x[i].style.pointerEvents = "auto";
                x[i].style.transition = "all .5s linear";
            }
            clicked = true;
        }
        else
        {
            for(let i=0;i<3;i++)
            {
                x[i].style.color = "rgba(0,0,0,0)";
                x[i].style.borderColor = "rgba(0,0,0,0)";
                x[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
                x[i].style.height = "auto";
                x[i].style.width = "auto";
                x[i].style.pointerEvents = "none";
            }
            clicked = false;
        }
    }
    Pin = () =>{
        let x = document.getElementById("list" + this.props.id).childNodes
        this.props.pin(this.props.id)
        for(let i=0;i<3;i++)
        {
            x[i].style.color = "rgba(0,0,0,0)";
            x[i].style.borderColor = "rgba(0,0,0,0)";
            x[i].style.height = "auto";
            x[i].style.width = "auto";
            x[i].style.pointerEvents = "none";
            x[i].style.transition = "none";
        }
        clicked = false;
    }
    changePinDocument=()=>{
        if(this.props.id<5)
        {
            for(let i=0;i<5;i++)
            {
                if(document.getElementById("list"+i)!==null)
                {
                    let x=document.getElementById("list"+i).childNodes;
                    x[0].innerHTML = "Unpin";
                }
            }
        }
        else{
            for(let i=5;i<999;i++)
            {
                if(document.getElementById("list"+i!==null))
                {
                    let x = document.getElementById("list"+i).childNodes;
                    x[0].innerHTML = "Pin";
                }
            }
        }
    }
    editDrawerClosedHandler=()=>{
        this.setState({showEditDrawer: false})
    }
    editDrawerToggleHandler=()=>{
        if(this.props.id>999)
        {
            alert("Only self posts are allowed to be edited!")
            return;
        }
        this.setState((prevstate)=>{
            return{showEditDrawer: !prevstate.showEditDrawer}
        })
    }
    editCallback=(edit)=>{
        this.setState({edit: edit},()=>this.someFn())
    }
    someFn=()=>{
        this.props.edit(this.state.edit)
    }
    Delete = () =>{
        this.props.deleted(this.props.id)
        let x = document.getElementById("list" + this.props.id).childNodes
        for(let i=0;i<3;i++)
        {
            x[i].style.color = "rgba(0,0,0,0)";
            x[i].style.borderColor = "rgba(0,0,0,0)";
            x[i].style.height = "auto";
            x[i].style.width = "auto";
            x[i].style.pointerEvents = "none";
            x[i].style.transition = "none";
        }
    }
    render(){
        return(
            <div className={classes.etc} onClick={this.changePinDocument}>
                    <ul id={"list" + this.props.id}>
                        <li onClick={this.Pin}><p>Pin</p></li>
                        <li>
                            <EditBar editDrawerToggleClicked={this.editDrawerToggleHandler}/>
                            <EditDrawer
                            open={this.state.showEditDrawer}
                            closed={this.editDrawerClosedHandler}
                            id={this.props.id}
                            post={this.state.post}
                            edit={this.editCallback}
                            />
                        </li>
                        <li onClick={this.Delete}><p>Delete</p></li>
                    </ul>
                        <img src={etcIcon} alt="etcicon" onClick={this.options}/>
            </div>
        );
    }
}

export default ETC;