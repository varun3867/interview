import React, {Component} from 'react';
import classes from './Activitycontent.css';
import instance from '../InstanceFirebase/Instance';
import Spinner from '../../Spinner/Spinner';

class ActivitycontentM6 extends Component{
    state={
        ActivityresultM6:[]
   }
   componentDidMount(){
        const account='0514710223'
        instance.get('/History/'+account+'/Activity6.json')
        .then(response=>{
             this.setState({ActivityresultM6 :response.data})
        })
        console.log("inside the session content",this.state.ActivityresultM6);
   }
render(){
  const display=<Spinner/>

        return(

            <div className={classes.Activitytablecontent}> 
              {this.state.ActivityresultM6.length!==0 ?      
            <table id={classes.table1}> 
            
                <tr>
                <td>  <strong>{Object.keys(this.state.ActivityresultM6)[4]}</strong>:
                <text className={classes.service}> {Object.values(this.state.ActivityresultM6)[4]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[1]}</strong>:
                    <text  className={classes.service2}>{Object.values(this.state.ActivityresultM6)[1]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[5]} </strong>:
                    <text  className={classes.service3}>{Object.values(this.state.ActivityresultM6)[5]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[0]}</strong>:
                    <text  className={classes.service4}>{Object.values(this.state.ActivityresultM6)[0]}</text></td>
                </tr>

                <tr>
                    <td><strong>{Object.keys(this.state.ActivityresultM6)[9]}</strong> :
                    <text className={classes.service}>{Object.values(this.state.ActivityresultM6)[9]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[3]}</strong>:
                    <text  className={classes.service2}>{Object.values(this.state.ActivityresultM6)[3]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[5]} </strong>:
                    <text  className={classes.service3}>{Object.values(this.state.ActivityresultM6)[5]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[2]}</strong>:
                    <text  className={classes.service4}>{Object.values(this.state.ActivityresultM6)[2]}</text></td>
                </tr>

                <tr>
                    <td>
                    <strong>{Object.keys(this.state.ActivityresultM6)[6]}</strong>: 
                    <text className={classes.service5}>{Object.values(this.state.ActivityresultM6)[6]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[1]}</strong>:  
                    <text className={classes.service2}>{Object.values(this.state.ActivityresultM6)[1]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[5]} </strong>:
                    <text className={classes.service3}>{Object.values(this.state.ActivityresultM6)[5]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[8]}</strong>:
                    <text className={classes.service4}>{Object.values(this.state.ActivityresultM6)[8]}</text></td>
                </tr>

                <tr>
                <td><strong>{Object.keys(this.state.ActivityresultM6)[9]}</strong> :
                <text className={classes.service}>{Object.values(this.state.ActivityresultM6)[9]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[1]}   </strong>:  
                    <text className={classes.service2}>{Object.values(this.state.ActivityresultM6)[1]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[5]} </strong>:
                    <text className={classes.service3}>{Object.values(this.state.ActivityresultM6)[5]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[2]}</strong>:
                    <text className={classes.service4}>{Object.values(this.state.ActivityresultM6)[2]}</text></td>
                </tr>

                <tr>
                    <td><strong>{Object.keys(this.state.ActivityresultM6)[6]}</strong>: 
                    <text className={classes.service5}>{Object.values(this.state.ActivityresultM6)[6]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[1]}</strong>:  
                    <text className={classes.service2}>{Object.values(this.state.ActivityresultM6)[1]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[5]} </strong>:
                    <text className={classes.service3}>{Object.values(this.state.ActivityresultM6)[5]}</text><br/>
                    <strong>{Object.keys(this.state.ActivityresultM6)[8]}</strong>:
                    <text className={classes.service4}>{Object.values(this.state.ActivityresultM6)[8]}</text></td>
                </tr>
                
            </table>       : display}
    
            </div>
        )
    }
}
    
export default ActivitycontentM6;