import React, {Component} from 'react';
import classes from  '../common/common.css';
import AAADetailsContents from '../DiagnosticContents/AAADetailsContents';
import SideTileHeader from '../DiagnosticTileComponents/SideTileHeader';



class AAADetails extends Component{

    render(){

        return(

        <div className={classes.SideDiasplit}>
               
            <SideTileHeader name="AAA Details"/>
             < AAADetailsContents />
        </div>

        )
    }
}
export default AAADetails;