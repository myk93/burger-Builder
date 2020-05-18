import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxilary'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop visable={props.visable} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.visable ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.visable ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal
