import React, {Component} from 'react';
import classes from  '../common/common.css';
import BroadbandinfoContent from '../UserContents/Broadbandinfocontent';
import UserTileHeader from './UserTileHeader';



class BroadbandInfo extends Component{

    render(){

        return(

        <div className={classes.BroadUsersplit}>
               
            <UserTileHeader name="Broadband Information"/>
             < BroadbandinfoContent />
        </div>

        )
    }
}
export default BroadbandInfo;