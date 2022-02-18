import React, { Component } from 'react';
import classes from  './Network.css';
import ArrowMark from '../../assets/Images/ArrowMark.png';



export default class SubNetwork extends Component{
 
    render(){
      return(
    <div>
        <div className={classes.Networksplit}>
        <svg height="350" >
        <rect x="47" y="20" width="180" height="80" className={classes.style}/>
        <line x1="0" y1="50" x2="48" y2="50" className={classes.style1} />
        <line x1="10" y1="50" x2="10" y2="180" className={classes.style1} />
        <rect x="47" y="140" width="180" height="80" className={classes.style}/>
        <line x1="10" y1="180" x2="45" y2="180" className={classes.Substyle1} />
        </svg>
        <div className={classes.text1} >{this.props.text}</div>
        <div className={classes.text2} >{this.props.text}</div>
        <div className={classes.Arrow1}>
        <img src={ArrowMark}  onClick={this.props.clickhandler}  alt="hello workong"/>
        </div>
        </div>
        </div>    
      )
    }
  }
