import React, {Component} from 'react';
import classes from  './Sessioninfo.css';
import Sessioncontent from '../Historycontents/Sessioncontent';
// import Session from '../Historycontents/Sessioncontentmain';
import Historytileheader from '../Historycomponents/Historytileheader';


class Sessioninfo extends Component{

    render(){

        return(

        <div className={classes.Sessioninfosplit}>
               
            <Historytileheader name="Sessions"/>
             < Sessioncontent />
             {/* <Session/> */}
        </div>

        )
    }
}
export default Sessioninfo;