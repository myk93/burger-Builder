import React, { Component } from 'react'
import Aux from '../../hoc/Auxilary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export class Layout extends Component {
    state = {
        visable: true
    }
    sideDrawerClosed = () => {
        this.setState({ visable: false })
    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer closed={this.sideDrawerClosed} visable={this.state.visable} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>)
    }
}

export default Layout
