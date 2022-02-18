import React, {Component} from 'react';
import NetworkContent from './NetworkContent';
import Networklast from './Networklast'


class NetworkContents extends Component{
    state={
        selectedOne:'',
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
        next= <Networklast text="network1"/> 
      }
        return( 
            <div>
            <NetworkContent show={this.state.show} text="network2" clickhandler={(event)=>this.clickHandler(event,Network)}/>
            <div>{next}</div>
            </div>
        )
    }
}
    
export default NetworkContents;