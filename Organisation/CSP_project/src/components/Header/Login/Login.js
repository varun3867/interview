import React, { Component } from 'react';
import MainIcon from '../../../assets/Images/MainIcon.png';
import classes from '../../common/common.css';
import {Redirect } from 'react-router-dom';
import instance from '../../InstanceFirebase/Instance';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        Operator: '',
        OperatorPassword:"",
        submitted: false,
        redirect:null,
        Users:[],
        operators: [],
        message:" "
    };
    this.changeOperatorHandler = this.changeOperatorHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
}
changeOperatorHandler(e) {
  this.setState({ Operator: e.target.value});
}
changePasswordHandler(e){
  this.setState({OperatorPassword:e.target.value});
}
onClickHandler(event){
  event.preventDefault();
  const Users=Object.keys(this.state.operators).map(keys  => { 
    return{[keys]: this.state.operators[keys]}
     });
 console.log(Users);
 const accountCheck = Users.map(account=>
  Object.keys(account).filter(key=>{
    return (key===this.state.Operator&&
      account[key]===this.state.OperatorPassword)
}) )
 console.log(accountCheck)
  const accountExist=accountCheck.join().replace(/,/g,'')
  sessionStorage.setItem('userName',this.state.Operator) 
  console.log('Account exist or not',accountExist)
   if (accountExist!=="") 
   {
      this.setState({ redirect: "/Accountlogin" ,submitted: true });
      
  }
  else if(this.state.Operator==="" && this.state.OperatorPassword===""){
    this.setState({ submitted: false, message:"please enter credentials" ,redirect: "/login"});
}
  else if(this.state.OperatorPassword==="" ){
      this.setState({ submitted: false,account_message:"please enter password" ,redirect: "/login" });
  }
  else if( this.state.Operator===""){
      this.setState({ submitted: false,operator_message:"please enter Operator" , redirect: "/login"});
  }
  else{
    this.setState({ submitted: false, message:"User doesn't exist" ,redirect: "/login"});
  }
  
}


componentDidMount(){
  instance.get('/operators.json')
  .then(response => {
      this.setState({operators: response.data})
  })
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
            <div className={classes.body}>
            <h1 className={classes.h1}>Login </h1>
            <div className={classes.label}>
            <text className={classes.operator1}>Operator Name :&nbsp;</text>  
            <input type="text" id="operator" className={classes.text} 
            onChange={this.changeOperatorHandler} name="operator"/><br/>
            <div className={classes.message1}>{this.state.operator_message} </div>
              <text className={classes.operator}>Operator Password :&nbsp;</text> 
            <input type="text" id="accountnumber"  className={classes.text}
             onChange={this.changePasswordHandler} name="password"/><br/>
             <div className={classes.message1}>{this.state.account_message} </div>
            </div>
            <div className={classes.submit}><button type="button" className={classes.button}  onClick={this.onClickHandler}  >
            Submit</button></div> 
            <div className={classes.message}>{this.state.message} </div>
            </div>
            </form> 
        
      </div>
     
    );
  }
}
export default Login;