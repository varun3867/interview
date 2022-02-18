import React, {Component} from 'react';
import classes from '../common/common.css';
import GreenTick from '../../assets/Images/Greentick2.png';


class DiagnosticTileHeader extends Component{
render(){

    return(
     <div >
        <h2 className={classes.Diaheaders}>
         <div className={classes.Pars}><img src={GreenTick}   alt="hello workong" /></div> 
            <h4 className={classes.headertext}>{this.props.name}</h4>
            </h2> 
     </div>

    )
}
}

export default DiagnosticTileHeader;