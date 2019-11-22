import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
import classes from './SearchDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import List from './List';


class searchDrawer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          list: this.props.title
        }
        /*this.state = {
          list: ["Are there any mentors that consider themselves an expert in ReactJS?", 
          "How do I look for a mentor if I don't know what I want to learn", 
          "I have some questions on Peer-to-Peer Businesses", 
          "What are the current popular business models to follow?", 
          "Is there a way to add value to my business?"]
        };*/
      }
    updateState = () =>{
        this.setState({list: this.props.title});
        console.log("update");
    }

    render()
    {
        let attachedClasses = [classes.SearchDrawer, classes.Close];
        if(this.props.open)
        {
            attachedClasses = [classes.SearchDrawer, classes.Open];
        }
        return(
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>                  
                  <section className="section">
                    <List items={this.state.list} clickBack={this.props.closed}/>
                  </section>                  
                </div>
            </Aux>
        )
    }    
}

export default searchDrawer;