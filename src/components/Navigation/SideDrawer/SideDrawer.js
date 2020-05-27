import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavegationItems from '../NavegationItems/NavegationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxilary'

const SideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.visable) {
        attachedClasses[1] = classes.Open;
    }
    return (
        <Aux>

            <Backdrop visable={props.visable} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>

                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavegationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer
