import React,{Component} from 'react';
import "./Drop.css"

class TestComponent extends Component{
    render(){
        // console.log("propsssssssssss areeeeeee : ",this.props,this.props.show)
        return(
            <div>
                {/* onClick={this.props.clicked} */}
                {this.props.show ? <div className="Backdrop" ></div> : null}
                
            </div>
        )
    }
}

export default TestComponent;