import React, { Component } from 'react';
import classes from '../../common/common.css';
import Cancelicon from '../../../assets/Images/cross.png';
import {Redirect } from 'react-router-dom';

class Cancel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            submitted: false,
            redirect:null
        };
    }
    changeHandler= (event) => {
        event.preventDefault();
        this.setState({ redirect: "/login" ,submitted: true });

    }

  render() {
    const submitted=this.state.submitted;
    console.log(submitted)
if(submitted===true )
{
    return(
        <Redirect to={this.state.redirect}/>  
    );
} 
    
    return (
      <div>
        <div className={classes.cancelpng}  >
            <img src={Cancelicon} alt="cancelLogo" onClick={this.changeHandler }/> 
         </div>   
      </div>
    
    );
  }
};


export default Cancel;
