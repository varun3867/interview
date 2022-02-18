import React, {Component} from 'react';
import classes from  './Activityinfo.css';
import ActivitycontentB6 from '../Historycontents/ActivitycontentB6';
import Historytileheader from '../Historycomponents/Historytileheader';



class Activityinfo extends Component{

    render(){

        return(

        <div className={classes.Activityinfosplit}>
            
            <Historytileheader name="Activities"/>
            {/* { < ActivitycontentB6 />} */}
            {this.props.button}
        </div>

        )
    }
}
export default Activityinfo;