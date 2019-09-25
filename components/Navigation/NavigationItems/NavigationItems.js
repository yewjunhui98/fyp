import React from 'react';

import classes from './NavigationItems.css';
import chatIcon from '../../../assets/images/chat-icon.svg';
import bellIcon from '../../../assets/images/bell-icon.png';
import personIcon from '../../../assets/images/person-icon.png';
import NavigationItem from './NavigationItem/NavigationItem';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
       {/* <NavigationItem link="#" active>Current Page</NavigationItem> */}
       <NavigationItem link="#"><img src={chatIcon} className={classes.ChatIcon} alt="chat"/></NavigationItem>
       <NavigationItem link="#"><img src={bellIcon} className={classes.BellIcon} alt="bell"/></NavigationItem>
       <NavigationItem link="#"><img src={personIcon} className={classes.PersonIcon} alt="person"/></NavigationItem>
       <DrawerToggle clicked={props.drawerToggleClicked} />
    </ul>
);

export default navigationItems;