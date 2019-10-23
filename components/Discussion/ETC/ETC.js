import React, {Component} from 'react';
import classes from './ETC.css';
import etcIcon from '../../../assets/images/etc.png';

let clicked = false;

class ETC extends Component
{    
    state={
        pin: false,
        deleted: false
    }
    options=()=>{
        let x = document.getElementById("list" + this.props.id).childNodes
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
        let x = document.getElementById("list" + this.props.id).childNodes
        if(this.state.pin===false)
        {
            x[0].innerHTML = "Unpin";
            this.setState({pin: true}, ()=>this.someFn())
        }
        else
        {
            x[0].innerHTML = "Pin";
            this.setState({pin: false}, ()=>this.someFn())
        }
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
    someFn=()=>
    {
        this.props.pin(this.state.pin)
    }

    Edit = () =>{
        console.log("bye");
    }
    sendDeleted=()=>{
        this.props.deleted(this.state.deleted)
    }
    Delete = () =>{
        this.setState({deleted: true}, ()=>this.sendDeleted())
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
            <div className={classes.etc}>
                    <ul id={"list" + this.props.id}>
                        <li onClick={this.Pin}>Pin</li>
                        <li onClick={this.Edit}>Edit</li>
                        <li onClick={this.Delete}>Delete</li>
                    </ul>
                        <img src={etcIcon} alt="etcicon" onClick={this.options}/>
            </div>
        );
    }
}

export default ETC;