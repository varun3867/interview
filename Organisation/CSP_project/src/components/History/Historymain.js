import React, {Component} from 'react';
import classes from './History.css';
import Sessioninfo from '../Historycomponents/Sessioninfo';
import Activityinfo from '../Historycomponents/Activityinfo';



class Historymain extends Component{
    render(){
        return(
            <div className={classes.History}>   
            <Sessioninfo/>
            {/* <Activityinfo/>    */}
            </div>
        )
    }
}
    
export default Historymain;