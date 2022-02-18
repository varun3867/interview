import React, {Component} from 'react';
import classes from  '../common/common.css';
import SideCRMContent from '../DiagnosticContents/SideCRMContent';
import SideTileHeader from '../DiagnosticTileComponents/SideTileHeader';



class SideCRM extends Component{

    render(){

        return(

        <div className={classes.SideDiasplit}>
               
            <SideTileHeader name="CRM"/>
             < SideCRMContent />
        </div>

        )
    }
}
export default SideCRM;