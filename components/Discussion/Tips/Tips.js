import React, {Component} from 'react';
import classes from './Tips.css';
import closeLogo from '../../../assets/images/close.png';
import calendarLogo from '../../../assets/images/calendar.png';

class tips extends Component{
    render(){
        function exit()
        {
            document.getElementById("close").innerHTML = "";
        }
        return(
            <div id = "close">
                <div className={classes.header}>
                    <div className={classes.title}>
                    <img src={closeLogo} onClick={exit} alt="closeicon"/>
                        <h4>Tips to get started</h4>
                    </div>
                    <hr/>
                    <div className={classes.body}>
                        <img src={calendarLogo} alt="caledaricon"/>
                        <h2><a href="/">Set</a></h2>
                        <p>Update your availability</p>
                        <p>Let others know when you are free to be booked</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default tips;