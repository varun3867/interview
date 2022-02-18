import React, { Component } from 'react';
import instance from '../InstanceFirebase/Instance';
import classes from  '../common/common.css';
import Spinner from '../../Spinner/Spinner';



export default class SolarWindDetailsContents extends Component {
     state={
          Healthresult:[]
     }
     componentDidMount(){
          const account=sessionStorage.getItem('accountNumber')
          console.log('the props we goe is : [SolarQindDetaislContents]',this.props.selected)
          instance.get('/Diagnostic/'+account+'/IPTV%20Details.json')
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
                      <td><strong>{Object.keys(this.state.Healthresult)[5]}</strong>:</td>
                      <td><text>{Object.values(this.state.Healthresult)[5]}</text></td>
                    </tr>                   
                    </table>        : display}
                    </div>
       );
  }
}
