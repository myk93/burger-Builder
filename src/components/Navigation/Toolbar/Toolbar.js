import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavegationItems from '../NavegationItems/NavegationItems'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavegationItems></NavegationItems>
        </nav>
    </header>
)

export default Toolbar
