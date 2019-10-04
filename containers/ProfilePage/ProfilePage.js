import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Profile from '../../components/Profile/Profile';
import ProfileDetail from '../../components/Profile/ProfileDetail/ProfileDetail';
import queryString from 'query-string';

class ProfilePage extends Component {

    state = {
        name: null,
        expertise: null,
        experience: null
      }
      componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        this.setState(prevState => ({
                  name: values.name,
                  expertise: values.expertise
                }))
      }
    render() {
        return(
            <Aux>
                <Profile name = {this.state.name}></Profile>
                <br/>
                <ProfileDetail expertise = {this.state.expertise} experience = {this.state.experience}></ProfileDetail>
            </Aux>
        );
    }
}

export default ProfilePage;