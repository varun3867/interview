import React, { Component } from 'react';
import classes from  '../common/common.css';
import {Footer} from '../TileComponents/TileFooter';
import {Header} from '../TileComponents/TileHeader';
import Accountinfocontents from '../Contents/Accountinfocontents'


export class AccountInfo extends Component{
    render(){
      return(
        <div className={classes.split}>
          <Header name="Account Information"/>
          <Accountinfocontents/>
            <Footer linkname="/More" name="MORE"/>
        </div>
      )
    }
  }
