import React, { Component } from 'react';
import classes from '../common/common.css';
import Refresh from '../../assets/Images/refreshing-image.png';
import MainIcon from '../../assets/Images/MainIcon.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Timer from '../Header/Timer/Timer';
import Logouting from './Logout';
import instance from '../InstanceFirebase/Instance';



const account=sessionStorage.getItem('accountNumber')  
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state ={
    Accounts:[],
    display:false
  }}
  refreshpage=()=> {
    window.location.reload(true); 
  }
  componentDidMount(){
    instance.get('/Accounts/'+account+'.json')
    .then(response => {
        this.setState({Accounts: response.data})
    })}
  
 
  render() {
    const user=sessionStorage.getItem('userName') 
    const account=sessionStorage.getItem('accountNumber')  
    const time=sessionStorage.getItem("Timer")
    console.log(time)
    return (
      <div>
      <header className={classes.box}>
        <div className={classes.header }>
          <div className={classes.drawer}> 
            <DrawerToggleButton/>
            </div>
          <div className={classes.Logo}>
              <img src={MainIcon} alt="MainLogo"/>
          </div>
          <h1 >CSP</h1>
          </div>
          <div className={classes.list}>
          <select className={classes.selectedValue}> 
          <option value="Riya">Riya</option>
          <option value="Ramu">Ramu</option>    
          <option selected value="Ashok">{user}</option>     
          </select>
          </div>
          </header>
      <div className={classes.maindiv}>
        <div className={classes.navbar_fixedtop}>
          <div className={classes.nav_link1}>William Smith<Timer/></div>    
                  <div className={classes.time}>{account}</div>
                  <div className={classes.Logo2}>    
                    <img src={Refresh} alt="RefreshingLogo" onClick={this.refreshpage}/>   
                  </div>
                  <Logouting/>
          </div>
          </div>
 </div>
    );
  };
}

