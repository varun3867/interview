import React, {Component} from 'react';
import classes from '../common/common.css';
import ProfileInfo from '../Usercomponents/ProfileInfo'
import BroadbandInfo from '../Usercomponents/BroadbandInfo';
import IPTVinfo from '../Usercomponents/IPTVinfo';
import Voiceinfo from '../Usercomponents/Voiceinfo';



class User extends Component{
    render(){
        return(
            <div className={classes.User}>
            <ProfileInfo/>
            <BroadbandInfo/>
            <Voiceinfo/>
            <IPTVinfo/>
            </div>
        )
    }
}
    
export default User;