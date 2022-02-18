import React, { Component } from 'react';
import classes from  './Network.css';
import ArrowMark from '../../assets/Images/ArrowMark.png';
import NetworkContents from './NetworkContents'



export default class NetworkFirstContent extends Component{
  state={
    selectedOne:'',
    show: true
  }
  clickHandler = (event,work) => {
    this.setState({selectedOne:work})
    event.target.style.display='none'
     
  }

    render(){
      const Network = 'network'
    let next;

    if(this.state.selectedOne==="network")
    {
      next= <NetworkContents/> 
    }
      
      return(
        <div>
        <div className={classes.Networksplit}>
          <svg className={classes.rect}>
          <rect x="47" y="20" width="180" height="80" className={classes.style} />
         </svg>
         <div className={classes.text} >{this.props.text}</div>
         <div className={classes.Arrow}>
          <img src={ArrowMark}  onClick={(event)=>this.clickHandler(event,Network)}  alt="workong"/> 
         </div>
          </div>
          <div>{next}</div>
          </div>
      )
    }
  }
