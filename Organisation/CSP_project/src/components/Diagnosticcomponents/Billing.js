import React, {Component} from 'react';
import classes from  '../common/common.css';
import BillingContent from '../DiagnosticContents/BillingContent';
import DiagnosticTileHeader from '../DiagnosticTileComponents/DiagnosticTileHeader';



class Billing extends Component{

    render(){

        return(

        <div className={classes.DiasplitB}>
               
            <DiagnosticTileHeader name="Billing"/>
             < BillingContent />
        </div>

        )
    }
}
export default Billing;