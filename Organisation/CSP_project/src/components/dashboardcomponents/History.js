import React, { Component } from 'react';
import classes from  '../common/common.css';
import {Footer} from '../TileComponents/TileFooter';
import {Header} from '../TileComponents/TileHeader';
import Historycontent from '../Contents/Historycontent'

export class History extends Component{
    render(){
      return(
        <div className={classes.split}>
          <Header name="History"/>
          <Historycontent/>
            <Footer linkname="/continue" name="Continue.."/>
        </div>
      )
    }
  }
