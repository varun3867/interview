import React, {Component} from 'react';
import classes from  '../common/common.css';
import IPTVinfocontent from '../UserContents/IPTVinfocontent';
import UserTileHeader from './UserTileHeader';



class IPTVinfo extends Component{

    render(){

        return(

        <div className={classes.IPTVUsersplit}>
               
            <UserTileHeader name="IPTV Information"/>
             < IPTVinfocontent />
        </div>

        )
    }
}
export default IPTVinfo;