import React, {Component} from 'react';
import classes from  '../common/common.css';
import GPONDetailsContents from '../DiagnosticContents/GPONDetailsContents';
import SideTileHeader from '../DiagnosticTileComponents/SideTileHeader';



class SideCRM extends Component{

    render(){

        return(

        <div className={classes.SideDiasplit}>
               
            <SideTileHeader name="GPON Details"/>
             < GPONDetailsContents />
        </div>

        )
    }
}
export default SideCRM;