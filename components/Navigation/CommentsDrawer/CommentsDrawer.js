import React from 'react';
import classes from './CommentsDrawer.css';
import Aux from '../../../hoc/Aux1';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Comments from '../../Discussion/Comments/Comments';
import ProfileIcon from '../../../assets/images/person-icon.png';

const CommentsDrawer = (props) =>{
    let attachedClasses = [classes.CommentsDrawer, classes.Close];
    if(props.open)
    {
        attachedClasses = [classes.CommentsDrawer, classes.Open];
    }
    const mappedComments = props.comments.map((value, i)=>{
        return <Comments image={ProfileIcon} name={props.name} comments={value} key={i}/>
    })
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                {mappedComments}
            </div>
        </Aux>
        );
};

export default CommentsDrawer;