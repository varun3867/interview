import React, { Component } from 'react';  
  
class Lifecycle extends React.Component {  
 
   state = {
       hello : "JavaTpoint",
       check : "coming..",
       text : ''
   };  
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.hello}</h3>  
             <h4> {this.state.check}</h4> 
             
            { /* Text box and update it accodingly
            <input type="text" onChange={(e)=>this.textOnchange(e)} /> 
             <br/>
             {this.state.text.length==0 ? null:<div>Text entered in above textbox is : {this.state.text}</div> }
            */}
             <button onClick = {()=>this.changeState()}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({hello:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   textOnchange=(e)=>{
       this.setState({text : e.target.value});
       console.log("change done in textbox..",e.target.value);
   }
   shouldComponentUpdate(newProps, newState) {
    console.log('Should Component Update'); 
    return true;  
   }  
   componentWillUpdate(nextProps, nextState) {
       console.log('Component Will UPDATE!');  
       console.log(nextProps);
       console.log(this.state);
       console.log(nextState);
   }  
   componentDidUpdate(prevProps, prevState) { 
       console.log('Component Did UPDATE!')  
      console.log(prevProps);
      console.log(this.state);
      console.log(prevState); 
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
export default Lifecycle;  