import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
import classes from './SearchDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import List from './List';


class searchDrawer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          list: ["aaa", "bbb", "aabb", "bcc"]
        };
        this.addItem = this.addItem.bind(this);
        //this.removeItem = this.removeItem.bind(this);
      }
    
      addItem(e) {
        // Prevent button click from submitting form
        e.preventDefault();
    
        // Create variables for our list, the item to add, and our form
        let list = this.state.list;
        const newItem = document.getElementById("addInput");
        const form = document.getElementById("addItemForm");
    
        // If our input has a value
        if (newItem.value !== "") {
          // Add the new item to the end of our list array
          list.push(newItem.value);
          // Then we use that to set the state for list
          this.setState({
            list: list
          });
          // Finally, we need to reset the form
          newItem.classList.remove("is-danger");
          form.reset();
        } else {
          // If the input doesn't have a value, make the border red since it's required
          newItem.classList.add("is-danger");
        }
      }
      
      /*
      <List delete={this.removeItem}>
      removeItem(item) {
        // Put our list into an array
        const list = this.state.list.slice();
        // Check to see if item passed in matches item in array
        list.some((el, i) => {
          if (el === item) {
            // If item matches, remove it from array
            list.splice(i, 1);
            return true;
          }
        });
        // Set state to list
        this.setState({
          list: list
        });
      }
      */

      //Add Functionality:
      /*
      <section className="section">
          <form className="form" id="addItemForm">
          <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Something that needs ot be done..."
          />
          <button className="button is-info" onClick={this.addItem}>
              Add Item
          </button>
          </form>
      </section>
      */

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