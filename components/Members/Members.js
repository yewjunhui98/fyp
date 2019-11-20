import React, {Component} from 'react';
import classes from './Members.css';
import Member from '../../components/Members/Member/Member';
import Modal from '../../components/UI/Modal/Modal';
import AddMembers from '../../components/Members/AddMembers/AddMembers';

class members extends Component {

  state = {
    people : [],
    showMoreEnabled : false,
    lessThanEqualsThree : false,
    showAddMembers : false
  }

  enableShowAddMembersFunction = () =>{
    this.setState(prevState => ({ 
        showAddMembers: true,
      }))
}

cancelShowAddMembersFunction = () =>{
    this.setState(prevState => ({ 
        showAddMembers: false
      }))
}

  checkMentorOrMentee(mentor, mentee, admin){
    const mentorArray = [
            {name: "James", position: "Driver"},
            {name: "John", position: "Toilet tech"},
            {name: "Peter", position: "Car Washer"},
            {name: "Alice", position: "Boss"},
            {name: "Parker", position: "Spiderman"}
        ]
    
    const menteeArray = [
            {name: "Ron"},//, position: "5"},
            {name: "Matterson", position: "Programmer"},
            {name: "James"},//, position: "7"},
            {name: "Drake", position: "Lecturer"}
    ]
    
    const adminArray = [
      {name: "Jake",position: "Page Admin"},
]

    if(mentor)
    {
      let newPeople = menteeArray.slice();
      this.setState(prevState => ({ 
        people: [...newPeople]
      }))
    }
    else if(mentee)
    {
      let newPeople = mentorArray.slice();
      this.setState(prevState => ({
        people: [...newPeople]
      }))
    }
    else if(admin)
    {
      let newPeople = adminArray.slice();
      this.setState(prevState => ({
        people: [...newPeople]
      }))
    }
    
    if(this.state.people.length <= 3)
    {
      this.setState(prevState => ({ 
        lessThanEqualsThree : true
      }))
    }
  }
  
  componentDidMount(){
    let mentor = false;
    let mentee = false;
    let admin = false;
    // this.setState(prevState => ({
    //     people: []
    //   }))


    if(this.props.type === "Mentor")
    {
      mentor = true;
    }

    if(this.props.type === "Mentee")
    {
      mentee = true;
    }

    if(this.props.type === "Admin")
    {
      admin = true;
    }
    
    this.checkMentorOrMentee(mentor, mentee, admin);
  }

  changeEnableShowMore = () => {
    this.setState({ 
      showMoreEnabled: !this.state.showMoreEnabled
    })
  }

  render() {

    const mappedMembers = this.state.people.length === 0 ? <p>No {this.props.type}s yet</p> : this.state.people.map((ctrl, i)=>{

      let value;
      if((i <= 2 )&& (!this.state.showMoreEnabled))
      {
        if(i === 2 && this.state.people.length >= 2)
        {
          value = <Member key = {i} fade = {true} name = {ctrl.name} position={ctrl.position}/>
        }
        else
        {
          value = <Member key = {i} fade = {false} name = {ctrl.name} position={ctrl.position}/>
        }
      }
      else if(this.state.showMoreEnabled)
      {
        value = <Member key = {i} fade = {false} name = {ctrl.name} position={ctrl.position}/>
      }

      return value;
      
      // if (i == 1) {
      //   return <h> {ctrl.name}</h>;
      // }
    });

    return (
      <div className={classes.header} > 
      <Modal show={this.state.showAddMembers} modalClosed={this.cancelShowAddMembersFunction}>
       {/* Add the component here */}
        < AddMembers type = {this.props.type}/>
      </Modal>
        <div className={classes.Member}>
          {this.props.type} ({this.state.people.length})
          <div className = {this.props.adminStatus?classes.addMore:classes.hiddenEnabled} onClick={this.enableShowAddMembersFunction}> Add</div>
          <div onClick={this.changeEnableShowMore} 
          className ={!this.state.showMoreEnabled || this.state.people.length <= 3 ? classes.hiddenEnabled:classes.pHide}>Hide</div>
        </div>
        <hr/>
        <div className={classes.list}>
            {mappedMembers}
            <div className={this.state.showMoreEnabled || this.state.people.length <= 3 ? classes.hiddenEnabled:classes.showMoreButton}
            onClick={this.changeEnableShowMore}>
              See more members
            </div>
        </div>
        
      </div>
    );
  }
}

export default members;