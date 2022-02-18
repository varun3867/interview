import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Dashboardmain from '../src/components/Dashboardmain';
import Login from './components/Header/Login/Login';
import Icon from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import { withRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import History from './components/History/Historymain';
import Network from './components/Network/Network';
import User from './components/User/User';
import Diagnostic from './components/Diagnostic/Diagnostic';
import Accountlogin from './components/Header/Accountlogin';
import Chart from './components/Charts/Chart';


class App extends Component {
  render() {
    console.log('entered into render{App}')
    const userExist=sessionStorage.getItem('accountNumber')
    console.log('username is [App]: ',userExist)
    const pathref=window.location.pathname
    console.log("windows",pathref)

    return (
      <div>
        {userExist===null ? null : <div> <Header />
        < Icon /></div>} 
        {(pathref==="/login"|| pathref==="/Accountlogin") && userExist!==null ? 
       <Route path="/Dashboardmain" component={Dashboard} exact /> :        
        <Switch><Route path="/login" component={Login}  exact />        
       <Route path="/Dashboardmain" component={Dashboard} exact />
      <Route path="/healthcheck" component={Diagnostic}  /> 
     <Route path="/history" component={History} exact />
     <Route path="/networkmap" component={Network} exact />
     <Route path="/user" component={User} exact />   
     <Route path="/More" component={User} exact />
     <Route path="/Accountlogin" component={Accountlogin} exact />  
     <Route path="/details" component={Diagnostic} exact /> 
     <Route path="/chart" component={Chart}  /> 
     </Switch>  }
        
      
       
      </div>
    
    );
  }
}

export default withRouter(App);
