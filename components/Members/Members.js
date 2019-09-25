import React from 'react';
import classes from './Members.css';
import Member from '../../components/Members/Member/Member';

const members = (props) => {
    
    return (
        <div className={classes.header} > 
          <div className={classes.Member}>
            {props.type} ({props.number})
          </div>
          <div className={classes.list}>
            <Member name="Chai Li Gen" position="null"/>
            <Member name="Tung Min Zhong" position="null"/>  
          </div>
        </div>
   );
}

export default members;