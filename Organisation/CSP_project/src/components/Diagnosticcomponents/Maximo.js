import React, {Component} from 'react';
import classes from  '../common/common.css';
import MaximoContent from '../DiagnosticContents/MaximoContent';
import DiagnosticTileHeader from '../DiagnosticTileComponents/DiagnosticTileHeader';



class Maximo extends Component{

    render(){

        return(

        <div className={classes.DiasplitM}>
               
            <DiagnosticTileHeader name="Maximo"/>
             < MaximoContent />
        </div>

        )
    }
}
export default Maximo;