import React, { Component } from 'react';
import Icon from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import History from '../components/History/History';
import Network from '../components/Network/Network';
import User from '../components/User/User';
import { BrowserRouter } from 'react-router-dom';
import Diagnostic from '../components/Diagnostic/Diagnostic';
import Chart from './Charts/Chart';


class Dashboardmain extends Component {

  render() {
    return (
        <BrowserRouter>
         <div >
        <Header />
        < Icon />
        <Switch>
          <Route path="/Dashboardmain" component={Dashboard} exact />
          <Route path="/healthcheck" component={Diagnostic}  /> 
          <Route path="/history" component={History} exact />
          <Route path="/networkmap" component={Network} exact />
          <Route path="/user" component={User} exact />
          <Route path="/chart" component={Chart} exact/>
        </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default Dashboardmain;
