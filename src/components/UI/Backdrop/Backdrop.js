import React from 'react'
import classes from './Backdrop.css'

const Backdrop = (props) => (
    props.visable ? <div className={classes.BackDrop} onClick={props.clicked}></div> : null
)

export default Backdrop
