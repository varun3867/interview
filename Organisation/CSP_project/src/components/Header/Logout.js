import React, { Component } from 'react';
import classes from '../common/common.css';
import Logout from '../../assets/Images/logoutlogo2.png';
import { withRouter} from 'react-router-dom';
import Modal from '../Header/Modal/Modal';

class Logouting extends Component{
    constructor(props) {
        super(props);
        this.state = {
          redirect:null,
          submitted: false,
          logging:false,
          selected:'radio1',
          submit:false
      };
    }
     
    SubmitHandler= ( ) => { 
      this.setState({
          submit:true
        });
        if(this.state.selected=== 'radio1'  && this.state.submit )
        {
          this.props.history.push("/Accountlogin");
        }
        else if(this.state.selected=== 'radio2'  && this.state.submit )
        {
          this.props.history.push("/login");
        }
 }

    changeHandler = (event) => {
      event.preventDefault();
      this.setState({logging:true});
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('accountNumber')
        // this.props.history.push("/login");
    }
    modalCancelHandler = () => {
        this.setState({logging:false});
    }

    render() {
      console.log("the logging value",this.state.logging);
        return (
          <div>
                  <Modal show={this.state.logging} modalClosed={this.modalCancelHandler}>  
                  <h2  className={classes.h1logout}>Logout</h2>    

                  <div className={classes.radiologout}><input type="radio" id="radio1" name="options" 
                     value="radio1" 
                   checked={this.state.selected === 'radio1' }   
                   onChange={(e) => this.setState({ selected :e.target.value})}  />  </div>   
                    <text className={classes.textlogout}>Close Session<br/></text>  
                   <div className={classes.radiologout}> <input type="radio" id="radio2"  name="options"  
                  value="radio2"  
                   checked={this.state.selected === 'radio2'}   
                     onChange={(e) => this.setState({ selected :e.target.value})} />  </div>  

                    <text className={classes.textlogout1}> Close Session & Operator Logout </text>  
                    <div className={classes.buttons} > <button  className={classes.modalbutton}  onClick={this.SubmitHandler}>
                    Submit </button></div> 

                  </Modal>

                  <div className={classes.Logo1}  >
                    <img src={Logout} alt="logoutLogo" onClick={this.changeHandler }/> 
                  </div>   
          </div>
        )
    };
}
export default withRouter(Logouting);