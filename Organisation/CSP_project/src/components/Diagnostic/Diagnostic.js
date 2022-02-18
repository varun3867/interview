import React, {Component} from 'react';
import classes from  '../common/common.css';
import Billing from '../Diagnosticcomponents/Billing';
import CRM from '../Diagnosticcomponents/CRM';
import Maximo from '../Diagnosticcomponents/Maximo';
import AAA from '../Diagnosticcomponents/AAA';
import GPON from '../Diagnosticcomponents/GPON';
import SolarWinds from '../Diagnosticcomponents/SolarWinds';
import SolarDetails from '../Diagnosticcomponents/SolarDetails';
import AAADetails from '../Diagnosticcomponents/AAADetails';
import BillingDetails from '../Diagnosticcomponents/BillingDetails';
import GPONDetails from '../Diagnosticcomponents/GPONDetails';
import MaximoDetails from '../Diagnosticcomponents/MaximoDetails';
import SideCRM from '../Diagnosticcomponents/SideCRM';


class Diagnostic extends Component{

  state={
    selectedOne:''
  }
  clickHandler = (work) => {
    this.setState({selectedOne:work})
  }
  
    render(){
      const billing='billing'
      const crm='crm'
      const maximo='maximo'
      const aaa='aaa'
      const gopn='gpon' 
      const solarWinds='solarWinds'
      console.log(this.state.selectedOne +  'hello' )
     
      let button;

      if(this.state.selectedOne==="billing")
      {
        button= <BillingDetails/> 
      }
      else if(this.state.selectedOne==="maximo")
      {
        button= <MaximoDetails /> 
      }
      else if(this.state.selectedOne==="crm")
       {
          button= <SideCRM/> 
       }
       else if(this.state.selectedOne==="aaa")
      {
        button= <AAADetails/> 
      }
      else if(this.state.selectedOne==="gpon")
      {
        button= <GPONDetails/> 
      }
      else if(this.state.selectedOne==="solarWinds")
      {
        button= <SolarDetails/> 
      }
      // </div>);
      return(
        <div >
      <div className={classes.diagnostic}>
      
          <ul>
            <li onClick={()=>this.clickHandler(billing)}><Billing  /></li>
            <li onClick={()=>this.clickHandler(crm)}> <CRM /></li>
             <li onClick={()=>this.clickHandler(maximo)}><Maximo /></li>
             <li onClick={()=>this.clickHandler(aaa)}><AAA /></li>
             <li onClick={()=>this.clickHandler(gopn)}><GPON /></li>
             <li onClick={()=>this.clickHandler(solarWinds)}><SolarWinds /></li>
             </ul>
      </div>
    {/* if(this.state.selectedOne==="billing")
    {
      
     <div> {icons}</div>
      
    }  */}
      {/* <div className={classes.sidediagnostic}> <SolarDetails /> </div> */}
      {/* <div>{this.state.selectedOne ? <Billing/> : < CRM />}</div> */}
      <div className={classes.sidediagnostic}>{button}</div>
      
      </div>
      


      )

    }

}
export default Diagnostic;