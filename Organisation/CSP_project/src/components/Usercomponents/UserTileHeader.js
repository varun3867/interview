import React, {Component} from 'react';
import classes from '../common/common.css';


class UserTileHeader extends Component{
render(){

    return(
     <div >
        <h2 className={classes.Userheaders}>
         <strong > {this.props.name} </strong>
            </h2> 
     </div>

    )
}
}

export default UserTileHeader;