import React, {Component} from 'react';
import classes from './Members.css';
import Member from '../../components/Members/Member/Member';

class members extends Component {

  state = {
  people : [],
  showMoreEnabled : false,
  lessThanEqualsThree : false
  }

  checkMentorOrMentee(mentor, mentee){
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
    
    this.checkMentorOrMentee(mentor, mentee);
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
        <div className={classes.Member}>
          {this.props.type} ({this.state.people.length})

          <div className = {classes.addMore}> Add</div>
          <div onClick={this.changeEnableShowMore} 
          className ={!this.state.showMoreEnabled || this.state.people.length <= 3 ? classes.hiddenEnabled:classes.pHide}>Hide</div>
        </div>
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