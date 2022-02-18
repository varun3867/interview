import React, { Component } from 'react';
import classes from  '../common/common.css';
import {NavLink} from 'react-router-dom';


export class Footer extends Component{
  render(){
    return(
      <div className={classes.footer}>
        <strong><NavLink to={this.props.linkname}>{this.props.name}</NavLink></strong>
      </div>
    )
  }
}
