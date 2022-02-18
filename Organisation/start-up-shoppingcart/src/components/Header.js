import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import classes from './Header.module.css';
import wrap from '../UI/wrap/wrap'
import SideDrawer from './SideDrawer/sideDrawer';

class Header extends Component {
     state={
        showSideDrawer:false
    }
sideDrawerClosedHandler = () => (
    this.setState({showSideDrawer:false})

)

sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
        console.log("the content inside prevState is : ",prevState)
        return {showSideDrawer:!prevState.showSideDrawer};
    },()=>console.log("the contents are [callback function]: ",this.state.showSideDrawer));
}
   render(){
       return(
        <wrap>
         <div className={classes.MainHeader}> 
                        <Navbar drawerToogleClicked={()=>this.sideDrawerToggleHandler()}/> </div>
         <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.content}>
            {this.props.children}
        </main>
        </wrap>

    )
   }
}

export default Header;
