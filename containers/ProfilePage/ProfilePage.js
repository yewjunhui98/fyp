import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Profile from '../../components/Profile/Profile';
import ProfileDetail from '../../components/Profile/ProfileDetail/ProfileDetail';
import queryString from 'query-string';

class ProfilePage extends Component {

    state = {
        name: null
      }
      componentDidMount(){
        // // const {handle} = this.props.match.params;
        // const { name } = this.props.location.state;
      
        // console.log(name);
        // const query = new URLSearchParams(this.props.location.search);
        // console.log("Query: " + query);
        // for(let param of query.enteries())
        // {
        //   if(param[0] === 'name')
        //   {
        //     this.setState(prevState => ({
        //       name: param[1]
        //     }))
        //   }
        // }

        const values = queryString.parse(this.props.location.search)
        this.setState(prevState => ({
                  name: values.name
                }))
      }
    render() {
        return(
            <Aux>
                <Profile name = {this.state.name}></Profile>
                <br/>
                <ProfileDetail></ProfileDetail>
            </Aux>
        );
    }
}

export default ProfilePage;