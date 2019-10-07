import React, {Component} from 'react';
import Aux from '../Aux1';
import classes from './Layout.css';
import TopBanner from '../../components/Navigation/TopBanner/TopBanner';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    state ={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render(){
        return(
            <Aux>
                <TopBanner/>                
                <SideDrawer open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <div className={classes.FixNav}></div>
                <NavBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            </Aux>
        )
    }
} 

export default Layout;