import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.css';

class Layout extends Component {
    render(){
        return(
            <Aux >
                <div>Backdrop, Navbar, SideDrawer</div>
                <main className={classes.Content} >
                {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;