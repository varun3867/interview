import React, { Component } from 'react';
import classes from  '../common/common.css';

import {AccountInfo} from '../dashboardcomponents/AccountInfo';
import HealthCheck from '../dashboardcomponents/HealthCheck';
import {NetworkMap} from '../dashboardcomponents/NetworkMap';
import {History} from '../dashboardcomponents/History';


class Dashboard extends Component {
  
  render() {
    const pathref=window.location.pathname
    console.log("window name",pathref)
    return (
      <div className={classes.dashboard}>
      {pathref==='/dashboard' ? 
      null :
      <div>
      <AccountInfo/>
      <HealthCheck/>
      <NetworkMap/>
      <History/></div>}   
      </div>
    );
  }
}

export default Dashboard;
