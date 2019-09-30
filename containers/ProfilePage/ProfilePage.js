import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Profile from '../../components/Profile/Profile';
import ProfileDetail from '../../components/Profile/ProfileDetail/ProfileDetail';


class ProfilePage extends Component {

    render() {
        return(
            <Aux>
                <Profile></Profile>
                <br/>
                <ProfileDetail></ProfileDetail>
            </Aux>
        );
    }
}

export default ProfilePage;