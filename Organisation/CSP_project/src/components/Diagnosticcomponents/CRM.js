import React, {Component} from 'react';
import classes from  '../common/common.css';
import CRMContent from '../DiagnosticContents/CRMContent';
import DiagnosticTileHeader from '../DiagnosticTileComponents/DiagnosticTileHeader';



class CRM extends Component{

    render(){

        return(

        <div className={classes.DiasplitC}>
               
            <DiagnosticTileHeader name="CRM"/>
             < CRMContent />
        </div>

        )
    }
}
export default CRM;