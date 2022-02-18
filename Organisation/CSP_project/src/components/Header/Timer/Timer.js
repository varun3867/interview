import React, { Component } from 'react';
import Classes from '../../common/common.css';
const time=sessionStorage.getItem("count")
class Timer extends Component {
    constructor(props){
        super(props);  
        this.state= {
            count:0
        }     
    }
     convertSeconds= (s)=> {
      const min=Math.floor(s/60);
      const sec=s%60;
      const format=min.toString().padStart(2,'0') +':'+ sec.toString().padStart(2,'0');
      sessionStorage.setItem("Timer",format)
      return format
    };
  render() {
    console.log(time)
      const {count}=this.state
    return (
      <div>
        <p className={Classes.timing}>Call Time:&nbsp; <strong className={Classes.count}>{this.convertSeconds(count)}</strong></p>
      </div>
    );
  }
  componentDidMount(){
      this.myInterval=setInterval(() =>{
        this.setState(prevState=>({
            count:prevState.count+1
            
        }))
      },1000)
      sessionStorage.setItem("count",this.state.count)
      time===0 ? this.setState.count=0: this.setState.count=time


  }
  componentWillUnmount(){
      clearInterval(this.myInterval)
  }
}

export default Timer;
