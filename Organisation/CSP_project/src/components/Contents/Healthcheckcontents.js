import React, { Component } from 'react';
import GreenTick from '../../assets/Images/Greentik.png';
import RedMark from '../../assets/Images/RedMark.png';
import instance from '../InstanceFirebase/Instance';
import classes from  '../common/common.css';
import Spinner from '../../Spinner/Spinner';


export default class Healthcheckcontents extends Component {
     state={
          Healthresult:[]
     }
     componentDidMount(){
          const account=sessionStorage.getItem('accountNumber')
          instance.get('/Dashboard/'+account+'/Health%20Check.json')
          .then(response=>{
               this.setState({Healthresult :response.data})
          })
     }
  render() {
     const display=<Spinner/>
     return (
        <div className={classes.contenthealth}>
        {this.state.Healthresult.length!==0 ? 
        <table>
               <tr>
                    <td ><span>{(Object.values(this.state.Healthresult)[0]==='pass') ?
                    (<div className={classes.tileicon}><img src={GreenTick}   alt="hello workong"/></div>) :
                    (<div className={classes.redicon} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
                    <text className={classes.healthText}>{Object.keys(this.state.Healthresult)[0]}</text>
                    <td ><span>{(Object.values(this.state.Healthresult)[1]==='pass') ?
                    (<div className={classes.tileicon1}><img src={GreenTick}   alt="hello workong"/></div>) :
                    (<div className={classes.redicon1} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
                    <text className={classes.healthText1}>{Object.keys(this.state.Healthresult)[1]}</text>   
               </tr>
               <tr>
                    <td ><span>{(Object.values(this.state.Healthresult)[2]==='pass') ?
                    (<div className={classes.tileicon}><img src={GreenTick}   alt="hello workong"/></div>) :
                    (<div className={classes.redicon} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
                    <text className={classes.healthText}>{Object.keys(this.state.Healthresult)[2]}</text> 
                    <td ><span>{(Object.values(this.state.Healthresult)[3]==='pass') ?
                    (<div className={classes.tileicon1}><img src={GreenTick}   alt="hello workong"/></div>) :
                    (<div className={classes.redicon1} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
                    <text className={classes.healthText1}>{Object.keys(this.state.Healthresult)[3]}</text>                   
               </tr>
               <tr>
                    <td ><span>{(Object.values(this.state.Healthresult)[4]==='pass') ?
                    (<div className={classes.tileicon}><img src={GreenTick}   alt="hello workong"/></div>) :
                    (<div className={classes.redicon} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
                    <text className={classes.healthText}>{Object.keys(this.state.Healthresult)[4]}</text>
                    <td ><span>{(Object.values(this.state.Healthresult)[5]==='pass') ?
                    (<div className={classes.tileicon1}><img src={GreenTick}   alt="hello workong"/></div>) :
                    (<div className={classes.redicon1} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
                    <text className={classes.healthText1}>{Object.keys(this.state.Healthresult)[5]}</text>                   
               </tr>
               <tr>
               <td ><span>{(Object.values(this.state.Healthresult)[6]==='pass') ?
               (<div className={classes.tileicon}><img src={GreenTick}   alt="hello workong"/></div>) :
               (<div className={classes.redicon} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
               <text className={classes.healthText}>{Object.keys(this.state.Healthresult)[6]}</text>
               <td ><span>{(Object.values(this.state.Healthresult)[7]==='pass') ?
               (<div className={classes.tileicon1}><img src={GreenTick}   alt="hello workong"/></div>) :
                    (<div className={classes.redicon1} ><img src={RedMark}   alt="hello workong"/></div>)}</span></td>
               <text className={classes.healthText1}>{Object.keys(this.state.Healthresult)[7]}</text>                  
          </tr>
          </table>        : display}
        </div>
     );
  }
}
