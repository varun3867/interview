import React, { Component } from 'react';
import classes from  './Network.css';
import ArrowMark from '../../assets/Images/ArrowMark.png';



export default class NetworkContent extends Component{
 
    render(){
      return(
        <div>
          <div className={classes.Networksplit}>
          <svg className={classes.rect} >
          <rect x="47" y="20" width="180" height="80" className={classes.style}/>
          <line x1="0" y1="50" x2="48" y2="50" className={classes.style1} />
          </svg>
          <div className={classes.text} >{this.props.text}</div>
          <div className={classes.Arrow}>
         <img src={ArrowMark}  onClick={this.props.clickhandler}  alt="hello workong"/>
         </div>
          </div>
          </div>    
      )
    }
  }
