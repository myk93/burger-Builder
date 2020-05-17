import React from 'react';
import classes from './Modal.css';

const Modal = (props) => {
    return (
        props.visable ? <div className={classes.Modal}>
            {props.children}
        </div> : null
    )
}

export default Modal
