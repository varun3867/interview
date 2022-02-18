import React, { Component } from 'react';
import instance from '../InstanceFirebase/Instance';
import classes from  '../common/common.css';
import Spinner from '../../Spinner/Spinner';



export default class BroadbandinfoContent extends Component {
     state={
          Healthresult:[]
     }
     componentDidMount(){
          const account='123456789'
          instance.get('/User/'+account+'/Broadband Information.json')
          .then(response=>{
               this.setState({Healthresult :response.data})
          })
     }
  render() {
    const display=<Spinner/>

     return (
          <div className={classes.Usertablecontent}>
          {this.state.Healthresult.length!==0 ? 
               <table id={classes.table1}>
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
                      <td><strong>{Object.keys(this.state.Healthresult)[8]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[8]}</text></td>
                    </tr>                  
                    </table>        : display}
                    </div>
       );
  }
}
