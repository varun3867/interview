import React, {Component} from 'react';
import classes from './Network.css';


class NetworkContents extends Component{

    render(){
        return( 
            <div>
            <div className={classes.Networksplit1}>
        <svg className={classes.rect}>
          <rect x="50" y="20" width="180" height="80" className={classes.style}/>
          <line x1="0" y1="50" x2="50" y2="50" className={classes.style1} />
          </svg>
          <div className={classes.text} >{this.props.text}</div>
          </div> 
            </div>
        )
    }
}
    
export default NetworkContents;