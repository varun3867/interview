import React, { Component } from 'react';
import classes from '../common/common.css';

export class Header extends Component {
  render() {
     return (
        <div className={classes.headerss}>
           <h1>{this.props.name}</h1>
        </div>
     );
  }
}