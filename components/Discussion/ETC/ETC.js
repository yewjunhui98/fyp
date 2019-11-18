import React, {Component} from 'react';
import classes from './ETC.css';
import etcIcon from '../../../assets/images/etc.png';
import EditBar from '../../Navigation/EditBar/EditBar';
import EditDrawer from '../../Navigation/EditDrawer/EditDrawer';

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
        let x = document.getElementById("list" + this.state.id).childNodes
        if(clicked === false)
        {
            for(let i=0;i<3;i++)
            {
                x[i].style.color = "black";
                x[i].style.borderColor = "black";
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
                x[i].style.height = "auto";
                x[i].style.width = "auto";
                x[i].style.pointerEvents = "none";
            }
            clicked = false;
        }
    }
    Pin = () =>{
        let x = document.getElementById("list" + this.state.id).childNodes
        this.props.pin(this.state.id)
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
        if(this.state.id<5)
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
        if(this.state.id>999)
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
        this.props.deleted(this.state.id)
        let x = document.getElementById("list" + this.state.id).childNodes
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
                    <ul id={"list" + this.state.id}>
                        <li onClick={this.Pin}><p>Pin</p></li>
                        <li>
                            <EditBar editDrawerToggleClicked={this.editDrawerToggleHandler}/>
                            <EditDrawer
                            open={this.state.showEditDrawer}
                            closed={this.editDrawerClosedHandler}
                            id={this.state.id}
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