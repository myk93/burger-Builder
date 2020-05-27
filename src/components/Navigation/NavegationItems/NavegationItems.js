import React from 'react'
import classes from './NavegationItems.css'
import NavegationItem from './NavegationItem/NavegationItem'

const NavegationItems = () => (

    <ul className={classes.NavegationItems}>
        <NavegationItem link="/" active> Burger Builder</NavegationItem>
        <NavegationItem link="/" > Checkout</NavegationItem>
    </ul>
)

export default NavegationItems

