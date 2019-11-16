import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Members from '../../components/Members/Members';

class MemberPage extends Component {
    render() {
        return(
            <Aux>
                <Members type="Mentee" adminStatus={false}/>
                <br />
                <Members type="Mentor" adminStatus={true}/>
                <br />
                <Members type="Admin" adminStatus={false}/>
            </Aux>
        );
    }
}

export default MemberPage;