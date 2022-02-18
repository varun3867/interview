import React, { Component } from 'react';
import MainIcon from '../../assets/Images/MainIcon.png';
import classes from '../common/common.css';
import {Redirect } from 'react-router-dom';
import instance from '../InstanceFirebase/Instance';
import Cancel from './Login/Cancel';

class Accountlogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
        Accountnumber:'',
        submitted: false,
        redirect:null,
        message:" ",
        Accounts:[],
    };
    this.changeAccountNumberHandler = this.changeAccountNumberHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
}

changeAccountNumberHandler(e) {
    this.setState({ Accountnumber: e.target.value});
    console.log('Account number form state is ',this.state.Accountnumber)

}


onClickHandler(event){
    event.preventDefault();
    const Users=Object.keys(this.state.Accounts).map(keys  => { 
      return{[keys]: this.state.Accounts[keys]}
       });
       const names=Object.values(this.state.Accounts).map(values => {
         return{[values]:this.state.Accounts[values]}
       })
   const accountCheck = Users.map(account=>
    Object.keys(account).filter(key=>{
      return (key===this.state.Accountnumber)
  }) )
  const name=accountCheck.map(values => {
    return{[values]:accountCheck[values]}
  })
  console.log(names)
  sessionStorage.setItem("accountName",name)
  console.log(accountCheck)
    const accountExist=accountCheck.join().replace(/,/g,'')
    console.log('Account exist or not',accountExist)
    sessionStorage.setItem('accountNumber',this.state.Accountnumber)
    if (accountExist!=="") 
    {
       this.setState({ redirect: "/Dashboardmain" ,submitted: true });
   }
   else if(this.state.Accountnumber==="" ){
    this.setState({ submitted: false, message:"please enter Accountnumber" ,redirect: "/login"});
    }
    else{
      this.setState({ submitted: false, message:"User doesn't Exist" ,redirect: "/login"});
    }
}
componentDidMount(){
  instance.get('/Accounts.json')
  .then(response => {
      this.setState({Accounts: response.data})
  })}
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
      <div >
        <header className={classes.box}>
        <div className={classes.header1 }>
        <div className={classes.Logotop}>
              <img src={MainIcon} alt="MainLogo"/>
          </div>
          <h1 >CSP</h1>
          </div>
          </header>
          <form>
          <div className={classes.accountbody}>
            <h1 className={classes.h1}>Login </h1>
            <div className={classes.label}>
          <text className={classes.accountnumber}>AccountNumber :&nbsp;</text> 
            <input type="text" id="accountnumber"  className={classes.text}
             onChange={this.changeAccountNumberHandler} name="accountnumber"/><br/>
          <div className={classes.submit}><button type="button" className={classes.button}  onClick={this.onClickHandler}  >
            Submit</button></div> 
            <div className={classes.message}>{this.state.message} </div>
            </div>
            </div>
            </form>
            <Cancel/>
          </div>
     
     );
   }
 }
 export default Accountlogin;