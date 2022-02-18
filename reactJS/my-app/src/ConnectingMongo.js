import React,{Component} from "react";
import Service from "./Service";
class ConnectingMongo extends  Component{
    state = {
        employee : []
    }
    serviceCall = ()=> {
        console.log("came into serviceCall function..");
        Service.getResource().then(res=>{
            console.log("In ServiceCall function .. ",res.data);
            this.setState({employee:res.data},()=>{
                console.log("after undating state : ",this.state.employee)
            })
        })
    }
    render(){
        return(
            <div><h2>Came here then...</h2>
            <button style={{width:'7rem',height:'2.75rem'}} onClick={()=>this.serviceCall()}/>
            {
            this.state.employee.map(val => Object.keys(val).filter(f => f!=="_id").map(r => <h2>{val[r]}</h2> )
                )
                }
            </div>

        )
    }
}

export default ConnectingMongo;