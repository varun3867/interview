import React, { Component } from 'react';
import classes from '../common/common.css';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DynamicChart from './DynamicChart';
import ColumnChart from './ColumnChart';

class Chart extends Component{

    render(){
        console.log("inside chart")
        return(
            <div className={classes.ArrangeChart}>
                 <div className={classes.Chart}><BarChart/></div>
                 <div className={classes.Chart}><PieChart/></div>
                 {/* <div className={classes.Chart}><DynamicChart/></div>  */}
                 <div className={classes.Chart} style={{marginTop:2}}><ColumnChart/></div>
                 
                 
                 
            </div>
        )
    }
}
export default Chart;