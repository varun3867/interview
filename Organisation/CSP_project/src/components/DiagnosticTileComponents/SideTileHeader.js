import React, {Component} from 'react';
import classes from '../common/common.css';


class SideTileHeader extends Component{
render(){

    return(
     <div >
        <h2 className={classes.SideDiaheadersM}>
         <strong className={classes.SideHeaderText}> {this.props.name} </strong>
            </h2> 
     </div>

    )
}
}

export default SideTileHeader;