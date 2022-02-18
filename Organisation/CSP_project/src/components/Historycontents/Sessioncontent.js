import React, {Component} from 'react';
import classes from './Sessioncontent.css';
import instance from '../InstanceFirebase/Instance';
import Spinner from '../../Spinner/Spinner';
import ActivitycontentB6 from './ActivitycontentB6';
import ActivitycontentB7 from './ActivitycontentB7';
import ActivitycontentB8 from './ActivitycontentB8';
import ActivitycontentM6 from './ActivitycontentM6';
import ActivitycontentM7 from './ActivitycontentM7';
import ActivitycontentM8 from './ActivitycontentM8';
import Activityinfo from '../Historycomponents/Activityinfo';
import Historytileheader from '../Historycomponents/Historytileheader';


class Sessioncontent extends Component{
      state={
            Sessionresult6:[],
            Sessionresult7:[],
            Sessionresult8:[],
            clicked:' '
       }

       firstclickHandler = (content ) => {
             this.setState({clicked:content})
             console.log("clicked",this.state.clicked);
       }
       componentDidMount(){
            const account='0514710223'

            instance.get('/History/'+account+'/Sessions/Day6.json')
            .then(response=>{
                 this.setState({Sessionresult6 :response.data})
            })
            instance.get('/History/'+account+'/Sessions/Day7.json')
            .then(response=>{
                 this.setState({Sessionresult7 :response.data})
            })
            instance.get('/History/'+account+'/Sessions/Day8.json')
            .then(response=>{
                 this.setState({Sessionresult8 :response.data})
            })
            console.log("inside the session content",this.state.Sessionresult6);
       }
    render(){
      const activitycontentB6='ActivitycontentB6'
      const activitycontentB7='ActivitycontentB7'
      const activitycontentB8='ActivitycontentB8'
      const activitycontentM6='ActivitycontentM6'
      const activitycontentM7='ActivitycontentM7' 
      const activitycontentM8='ActivitycontentM8'
      // console.log(this.state.selectedOne +  'hello' )
     
      let button;
const display=<Spinner/>

if(this.state.clicked==='ActivitycontentB6')
{
  button= <ActivitycontentB6/> 
}
else if(this.state.clicked==='ActivitycontentB7')
{
  button= <ActivitycontentB7 />
}
else if(this.state.clicked==="ActivitycontentB8")
 {
    button= <ActivitycontentB8/> 
 }
 else if(this.state.clicked==="ActivitycontentM6")
{
  button= <ActivitycontentM6/> 
}
else if(this.state.clicked==="ActivitycontentM7")
{
  button= <ActivitycontentM7/> 
}
else 
{
  button= <ActivitycontentM8/> 
}
        return(
            <div>
            <div className={classes.Sessiontablecontent}> 
             {this.state.Sessionresult6.length!==0 ?   
                <table id={classes.table1}> 
                <tr>
                      <td onClick={()=>this.firstclickHandler(activitycontentB6)} ><strong>{Object.keys(this.state.Sessionresult6)[0]}</strong>  <br/>   
                      {Object.values(this.state.Sessionresult6)[0]}</td>
                </tr>
                <tr>
                      <td  onClick={()=>this.firstclickHandler(activitycontentM6)}><strong>{Object.keys(this.state.Sessionresult6)[1]}</strong><br/>
                      {Object.values(this.state.Sessionresult6)[1]}</td>
                </tr>
                <tr>
                      <td onClick={()=>this.firstclickHandler(activitycontentB7)}><strong>{Object.keys(this.state.Sessionresult7)[0]}</strong><br/>
                      {Object.values(this.state.Sessionresult7)[0]}</td>
                </tr>
                <tr>
                      <td  onClick={()=>this.firstclickHandler(activitycontentM7)}><strong>{Object.keys(this.state.Sessionresult7)[1]}</strong><br/>
                      {Object.values(this.state.Sessionresult7)[1]}</td>
                </tr>
                <tr>
                      <td  onClick={()=>this.firstclickHandler(activitycontentB8)}><strong>{Object.keys(this.state.Sessionresult8)[0]}</strong><br/>
                      {Object.values(this.state.Sessionresult8)[0]}</td>
                </tr>
                <tr>
                      <td  onClick={()=>this.firstclickHandler(activitycontentM8)}><strong>{Object.keys(this.state.Sessionresult8)[1]}</strong><br/>
                      {Object.values(this.state.Sessionresult8)[1]}</td>   
                </tr>

                </table>        : display}   
               
            </div>

             <div className={classes.Activitytablecontent}>   
             {/* <Historytileheader/> */}
             <Activityinfo button={button}/> 
             </div>
            </div>
        )
    }
}
    
export default Sessioncontent;