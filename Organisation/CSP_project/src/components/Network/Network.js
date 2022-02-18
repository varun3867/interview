import React, {Component} from 'react';
import classes from './Network.css';
import NetworkFirstContent from './NetworkFirstContent'


class Network extends Component{

    render(){ 
        return( 
            <div className={classes.NetworkDashboard}>
            <NetworkFirstContent text="firstcontent"/>
            </div>
        )
    }
}
    
export default Network;