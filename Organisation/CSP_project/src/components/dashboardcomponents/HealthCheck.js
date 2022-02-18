import React, { Component } from 'react';
import classes from  '../common/common.css';
import {Footer} from '../TileComponents/TileFooter';
import {Header} from '../TileComponents/TileHeader';
import Healthcheckcontents from '../Contents/Healthcheckcontents';
import Diagnostic from '../Diagnostic/Diagnostic';
import {withRouter} from 'react-router-dom';


class HealthCheck extends Component{
  state={
    showMe: true
  }
  Operation=()=>{
    this.setState({
      showMe:false
    })
    this.props.history.push('/healthcheck')
  }
    render(){

      return(
        <div className={classes.split}>
        {this.state.showMe ?
          null : <Diagnostic/>}
          <Header name="Health Check"/>
          <Healthcheckcontents/>
            <Footer linkname="/details" onClick={()=>this.Operation} name="DETAILS"/>
        </div>
      )
    }
  }
  export default withRouter(HealthCheck) 
