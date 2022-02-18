import React, {Component} from 'react';
import classes from  '../common/common.css';
import ProfileInfocontent from '../UserContents/ProfileInfocontent';
import UserTileHeader from './UserTileHeader';



class ProfileInfo extends Component{

    render(){

        return(

        <div className={classes.Usersplit}>
               
            <UserTileHeader name="Profile Information"/>
             < ProfileInfocontent />
        </div>

        )
    }
}
export default ProfileInfo;