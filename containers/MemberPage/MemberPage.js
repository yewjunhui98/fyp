import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Members from '../../components/Members/Members';

class MemberPage extends Component {
    render() {
        return(
            <Aux>
                <Members type="Mentee"/>
                <br />
                <Members type="Mentor"/>
            </Aux>
        );
    }
}

export default MemberPage;