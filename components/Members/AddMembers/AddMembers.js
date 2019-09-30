import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
// import classes from './AddMembers.css';

class AddMembers extends Component {
    render() {
        return(
            <Aux>
                <p>Invite {this.props.type} to INTI FYP portal</p>
                <p>Email Address</p>
                <input type="email" name="invitedEmail" />
            </Aux>
        );
    }
}

export default AddMembers;