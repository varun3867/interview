import React, { Component } from 'react';
import classes from  '../common/common.css';
import {Header} from '../TileComponents/TileHeader';
import NetworkMap1 from '../../assets/Images/NetworkMap1.png';


export class NetworkMap extends Component{
    render(){
      return(
        <div className={classes.split}>
          <Header name="Network Map"/>
          <div className={classes.Networkmap}><img src={NetworkMap1}   alt="hello workong"/>
          </div>
          </div>
      )
    }
  }
