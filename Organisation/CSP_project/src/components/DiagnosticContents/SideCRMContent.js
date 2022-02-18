import React, { Component } from 'react';
import instance from '../InstanceFirebase/Instance';
import classes from  '../common/common.css';
import Spinner from '../../Spinner/Spinner';



export default class SideCRMContent extends Component {
     state={
          Healthresult:[]
     }
     componentDidMount(){
          const account=sessionStorage.getItem('accountNumber')
          instance.get('/Diagnostic/'+account+'/CRM1.json')
          .then(response=>{
               this.setState({Healthresult :response.data})
          })
     }
  render() {
    const display=<Spinner/>

     return (
          <div className={classes.contentdia}>
          {this.state.Healthresult.length!==0 ? 
               <table id={classes.table}>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[0]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[0]}</text></td>
                    </tr>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[1]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[1]}</text></td>
                    </tr>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[2]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[2]}</text></td>
                    </tr>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[3]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[3]}</text></td>
                    </tr>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[4]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[4]}</text></td>
                    </tr>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[5]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[5]}</text></td>
                    </tr>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[6]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[6]}</text></td>
                    </tr>
                    <tr>
                      <td><strong>{Object.keys(this.state.Healthresult)[7]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[7]}</text></td>
                    </tr>                     
                    </table>        : display}
                    </div>
       );
  }
}
