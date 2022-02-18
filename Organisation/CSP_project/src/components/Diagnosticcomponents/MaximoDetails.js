import React, {Component} from 'react';
import classes from  '../common/common.css';
import MaximoDetailsContents from '../DiagnosticContents/MaximoDetailsContents';
import SideTileHeader from '../DiagnosticTileComponents/SideTileHeader';



class SideCRM extends Component{

    render(){

        return(

        <div className={classes.SideDiasplit}>
               
            <SideTileHeader name="Maximo Contents"/>
             < MaximoDetailsContents />
        </div>

        )
    }
}
export default SideCRM;