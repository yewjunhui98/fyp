import React, {Component} from 'react';
import classes from './Profile.css';
import {Route} from 'react-router-dom';
class profile extends Component {
state = {
  name: null
}
componentDidMount(){
  // // const {handle} = this.props.match.params;
  // const { name } = this.props.location.state;

  // console.log(name);
  const query = new URLSearchParams(this.props.location.search);
  console.log("Query: " + query);
  // for(let param of query.enteries())
  // {
  //   if(param[0] === 'name')
  //   {
  //     this.setState(prevState => ({
  //       name: param[1]
  //     }))
  //   }
  // }
}
    render()
    {
        return(
          <div className = {classes.header}>
            <div className = {classes.picture}>
                <img src="/" alt="placeholder"></img>
            </div>
            <h2>{this.props.name}</h2>
            <h3>some type</h3>
          </div> 
        );
    }
}

export default profile;