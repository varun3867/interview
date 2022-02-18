import React, {Component} from 'react';
import classes from  '../common/common.css';
import SolarWindsContent from '../DiagnosticContents/SolarWindsContent';
import DiagnosticTileHeader from '../DiagnosticTileComponents/DiagnosticTileHeader';



class SolarWinds extends Component{

    render(){

        return(

        <div className={classes.DiasplitS}>
               
            <DiagnosticTileHeader name="SolarWinds"/>
             < SolarWindsContent />
        </div>

        )
    }
}
export default SolarWinds;