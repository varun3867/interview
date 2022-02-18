import React, {Component} from 'react';
import classes from './Activitycontent.css';
import instance from '../InstanceFirebase/Instance';
import Spinner from '../../Spinner/Spinner';

class ActivitycontentM8 extends Component{
    state={
        Activityresult:[]
   }
   componentDidMount(){
        const account='0514710223'
        instance.get('/History/'+account+'/ActivityM8.json')
        .then(response=>{
             this.setState({Activityresult :response.data})
        })
        console.log("inside the session content",this.state.Activityresult);
   }
render(){
  const display=<Spinner/>

        return(

            <div className={classes.Activitytablecontent}> 
              {this.state.Activityresult.length!==0 ?    
            <table id={classes.table1}> 
            
                <tr>
                <td>  <strong>{Object.keys(this.state.Activityresult)[4]}</strong> :
                <text className={classes.service}> {Object.values(this.state.Activityresult)[4]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[3]}</strong> :
                    <text  className={classes.service2}>{Object.values(this.state.Activityresult)[3]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[6]} </strong>:
                    <text  className={classes.service3}>{Object.values(this.state.Activityresult)[6]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[0]}</strong>:
                    <text  className={classes.service4}>{Object.values(this.state.Activityresult)[0]}</text></td>
                </tr>

                <tr>
                    <td><strong>{Object.keys(this.state.Activityresult)[5]} </strong> :
                    <text className={classes.service}>{Object.values(this.state.Activityresult)[5]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[1]}</strong>:
                    <text  className={classes.service2}>{Object.values(this.state.Activityresult)[1]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[6]} </strong>:
                    <text  className={classes.service3}>{Object.values(this.state.Activityresult)[6]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[2]}</strong>:
                    <text  className={classes.service4}>{Object.values(this.state.Activityresult)[2]}</text></td>
                </tr>

                <tr>
                    <td>
                    <strong>{Object.keys(this.state.Activityresult)[7]}</strong>: 
                    <text className={classes.service5}>{Object.values(this.state.Activityresult)[7]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[3]}</strong> :  
                    <text className={classes.service2}>{Object.values(this.state.Activityresult)[3]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[6]} </strong>:
                    <text className={classes.service3}>{Object.values(this.state.Activityresult)[6]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[9]}</strong>:
                    <text className={classes.service4}>{Object.values(this.state.Activityresult)[9]}</text></td>
                </tr>

                <tr>
                <td><strong>{Object.keys(this.state.Activityresult)[7]}</strong>:
                <text className={classes.service5}>{Object.values(this.state.Activityresult)[7]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[1]}</strong>:  
                    <text className={classes.service2}>{Object.values(this.state.Activityresult)[1]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[6]} </strong>:
                    <text className={classes.service3}>{Object.values(this.state.Activityresult)[6]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[2]}</strong>:
                    <text className={classes.service4}>{Object.values(this.state.Activityresult)[2]}</text></td>
                </tr>

                <tr>
                    <td><strong>{Object.keys(this.state.Activityresult)[7]}</strong>: 
                    <text className={classes.service5}>{Object.values(this.state.Activityresult)[7]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[1]}</strong>:  
                    <text className={classes.service2}>{Object.values(this.state.Activityresult)[1]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[6]} </strong>:
                    <text className={classes.service3}>{Object.values(this.state.Activityresult)[6]}</text><br/>
                    <strong>{Object.keys(this.state.Activityresult)[9]}</strong>:
                    <text className={classes.service4}>{Object.values(this.state.Activityresult)[9]}</text></td>
                </tr>
                
            </table>       : display}
    
            </div>
        )
    }
}
    
export default ActivitycontentM8;