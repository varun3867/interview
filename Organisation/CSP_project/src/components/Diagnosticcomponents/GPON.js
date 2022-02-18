import React, {Component} from 'react';
import classes from  '../common/common.css';
import GPONContent from  '../DiagnosticContents/GPONContent';
import DiagnosticTileHeader from '../DiagnosticTileComponents/DiagnosticTileHeader';



class GPON extends Component{

    render(){

        return(

        <div className={classes.DiasplitG}>
               
            <DiagnosticTileHeader name="GPON"/>
             < GPONContent />
        </div>

        )
    }
}
export default GPON;