import React, {Component} from 'react';
import classes from  '../common/common.css';
import VoiceinfoContent from '../UserContents/Voiceinfocontent';
import UserTileHeader from './UserTileHeader';



class Voiceinfo extends Component{

    render(){

        return(

        <div className={classes.VoiceUsersplit}>
               
            <UserTileHeader name="Voice Information"/>
             < VoiceinfoContent />
        </div>

        )
    }
}
export default Voiceinfo;