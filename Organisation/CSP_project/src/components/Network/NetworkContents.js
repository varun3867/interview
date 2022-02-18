import React, {Component} from 'react';
import SubNetwork from './SubNetwork';
import Networksecond from './Networksecond'


class NetworkContents extends Component{
    state={
        selectedOne:''
      }
      clickHandler = (event,work) => {
        this.setState({selectedOne:work})
        event.target.style.display='none'

      }

    render(){
        const Network = 'network'
      let next;

      if(this.state.selectedOne==="network")
      {
        next= <Networksecond/> 
      }
        return( 
            <div>            
            <SubNetwork  text="networkmap" clickhandler={(event)=>this.clickHandler(event,Network)}/>
            <div>{next}</div>
            </div>
        )
    }
}
    
export default NetworkContents;