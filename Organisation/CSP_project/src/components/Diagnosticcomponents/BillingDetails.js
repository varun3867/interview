import React, {Component} from 'react';
import classes from  '../common/common.css';
import AAADetailsContents from '../DiagnosticContents/AAADetailsContents';
import SideTileHeader from '../DiagnosticTileComponents/SideTileHeader';



class BillingDetails extends Component{

    render(){

        return(

        <div className={classes.SideDiasplit}>
               
            <SideTileHeader name="Billing Details"/>
             < AAADetailsContents />
        </div>

        )
    }
}
export default BillingDetails;