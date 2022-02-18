import React,{Component} from 'react';
import './test.css';
import Drop from './Drop';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';

class TestComponent extends Component{
    state={
        show:false,
        big:false
    }

    componentWillMount(){
    }
    funexe=(show,id)=>{
        // $("#box-id").on(function(){
        //     console.log("came here")
        //     alert("came inn") 
        if(id=="box1"){

            if(show){

                $(".box1").animate({
                    // width: '1250px'
                    width:'50%',
                    height: '80%',
                    // backgroundColor:'red',
                    // marginLeft: '+=80px',
                    fontSize: '22px',
                
                },1000)
            }
            else{
                $(".box1").animate({
                    // width: '1250px'
                    width:'18rem',
                    height: '18rem',
                    // backgroundColor:'red',
                    // marginLeft: '+=80px',
                    fontSize: '22px'
                },1000)
            }

        }
        else if(id=='box2'){

            if(show){

                $(".box2").animate({
                    // width: '1250px'
                    width:'50%',
                    height: '80%',
                    // backgroundColor:'red',
                    // marginLeft: '+=80px',
                    position:'relative',
                    left:'8rem',
                    fontSize: '22px',
                
                },1000)
            }
            else{
                $(".box2").animate({
                    // width: '1250px'
                    width:'18rem',
                    height: '18rem',
                    // backgroundColor:'red',
                    // marginLeft: '+=80px',
                    // position:'fixed',
                    left:'28rem',
                    fontSize: '22px'
                },1000)
            }

        }
        
        // })
    }

    showBigScreen=(id)=>{
        // alert("function came")
        if(id=='box1'){
            document.getElementById(id).style.zIndex="50";
            document.getElementById('box2').style.zIndex="10"
        }
        else if(id=='box2'){
            document.getElementById(id).style.zIndex="50";
            document.getElementById('box1').style.zIndex="10"
        }
        this.setState({big:!this.state.big},()=>{
            this.funexe(this.state.big,id)
        })
    }


    render(){
        return(
            <div>
                <h2>The same happend</h2>
                <Drop show={this.state.show}/>
                <div onClick={()=>this.showBigScreen('box1')} style={{zIndex:'10'}} id="box1" className="box1">
                    <span id="box1Click" style={{backgroundColor:"",cursor:"pointer"}} onClick={()=>this.showBigScreen()}>click</span>

                </div>
                <div  onClick={()=>this.showBigScreen('box2')} style={{zIndex:'10'}} id="box2" className="box2">
                    <span style={{cursor:"pointer"}}>click</span>

                </div>
            </div>
        )
    }
}

export default TestComponent;