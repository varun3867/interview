import React, {Component} from 'react';
import classes from './Sessioninfo.css';


class HistorytileActivityheader extends Component{
render(){

    return(
     <div >
        <h2 className={classes.Sessionheaders}>
         <div className={classes.UserHeaderText}> {this.props.name} </div>
            </h2> 
     </div>

    )
}
}

export default HistorytileActivityheader;