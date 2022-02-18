import React, {Component} from 'react';
import classes from  '../common/common.css';
import SolarWindDetailsContents from '../DiagnosticContents/SolarWindDetailsContents';
import SideTileHeader from '../DiagnosticTileComponents/SideTileHeader';



class SolarDetails extends Component{

    render(){

        return(

        <div className={classes.SideDiasplit}>
               
            <SideTileHeader name="SOLARWIND Details"/>
             < SolarWindDetailsContents selected={this.props.selected}/>
        </div>

        )
    }
}
export default SolarDetails;