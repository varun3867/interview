import React, {Component} from 'react';
import classes from  '../common/common.css';
import AAAContent from '../DiagnosticContents/AAAContent';
import DiagnosticTileHeader from '../DiagnosticTileComponents/DiagnosticTileHeader';



class AAA extends Component{

    render(){

        return(

        <div className={classes.DiasplitA}>
               
            <DiagnosticTileHeader name="AAA"/>
             < AAAContent />
        </div>

        )
    }
}
export default AAA;