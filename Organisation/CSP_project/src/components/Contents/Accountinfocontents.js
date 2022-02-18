import React, { Component } from 'react';
import instance from '../InstanceFirebase/Instance';
import classes from  '../common/common.css';
import Spinner from '../../Spinner/Spinner';



export default class Accountinfocontents extends Component {
     state={
          Healthresult:[]
     }
     componentDidMount(){
          const account=sessionStorage.getItem('accountNumber')
          instance.get('/Dashboard/'+account+'/Account%20Info.json')
          .then(response=>{
               this.setState({Healthresult :response.data})
          })
     }
  render() {
       const display=<Spinner/>

     return (
          <div className={classes.contentdb}>
          {this.state.Healthresult.length!==0 ? 
               <table>
               <tr>
               <td><strong>{Object.keys(this.state.Healthresult)[0]}</strong>:  </td>
               <td><text>{Object.values(this.state.Healthresult)[0]}</text></td>
               </tr>
          <tr>
               <td><strong>{Object.keys(this.state.Healthresult)[1]}</strong>:  </td>
               <td><text>{Object.values(this.state.Healthresult)[1]}</text></td>
          </tr>
          <tr>
               <td><strong>{Object.keys(this.state.Healthresult)[2]}</strong>:  </td>
               <td><text>{Object.values(this.state.Healthresult)[2]}</text></td>
          </tr>
          <tr>
               <td><strong>{Object.keys(this.state.Healthresult)[3]}</strong>:  </td>
               <td><text>{Object.values(this.state.Healthresult)[3]}</text></td>
          </tr>   
          </table>        : display}
     </div>
       );
  }
}
