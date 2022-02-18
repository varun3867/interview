import React, { Component } from 'react';
import './Operator.css';
import Input from '../../UI/Input';
import {connect} from 'react-redux';
import * as actionCreators from '../../containers/store/actions';
import Button from '../../UI/Button';

class Operator extends Component {
    state={
        tableStart:0,
        displayTable:false,
        tableSize:0,
        LoginButtonDisable:true,
        operatorName:'',
        firstButtonDisabled:false,
        previousButtonDisabled:true,
        nextButtonDisabled:false,
        lastButtonDisabled:false,
        shippingStatus:'',
        dropDownDisabled:true,
        orderId:''
    }
    componentWillMount(){
        console.log('[Operator] componentWillMount')
        const username=localStorage.getItem('username')
        this.setState({operatorName:username})
        console.log('operator name',username)
        this.props.getItems(this.state.operatorName)
    }
    buttonClicked = () => {
        console.log('[Operator] buttonClicked')
        this.props.getItems(this.state.operatorName)
        this.setState({displayTable:true})
    }
    rdButtonDeliveryStatusUpdate= (event) => {
        this.setState({orderId:event.target.value,shippingStatus:'',dropDownDisabled:false})

    }
    componentDidUpdate(prevState){
        console.log('[Operator] componentDidUpdate')
        console.log(this.state.operatorName)
        console.log(this.state.shippingStatus)
        console.log('previous props is : ',prevState.shippingStatus)
        console.log('orderId is : ',this.state.orderId)
        
    }
    paginationFirstButtonClicked = (event,tableSize) => {
        console.log('insdie paginationFirstButtonClicked',tableSize)
        this.setState({paginationButton:event.target.value,
        tableStart:0,
        previousButtonDisabled:true,
        nextButtonDisabled:false,
        paginationButtonCliked:true})
      

    }
    paginationLastButtonClicked = (event,itemsLength,tableSize) => {
        this.setState({paginationButton:event.target.value,
        tableStart:itemsLength-tableSize,
        previousButtonDisabled:false,
        nextButtonDisabled:true,
        paginationButtonCliked:true    })
       

    }
    paginationPreviousButtonClicked = (event,tableSize) => {
        
        // if(this.state.tableStart===1)
        // {
        //     this.setState({paginationButton:event.target.value,
        //         tableStart:this.state.tableStart-1, nextButtonDisabled:false})

        // }
        // else{
        this.setState({paginationButton:event.target.value,
        tableStart:this.state.tableStart-tableSize,nextButtonDisabled:false,
        paginationButtonCliked:true})
        // }
    
        if((this.state.tableStart-tableSize)===0){
            console.log('entered itno tablestart===0')
            this.setState({previousButtonDisabled:true})
        }
        if((this.state.tableStart-tableSize)<=0){
            this.setState({previousButtonDisabled:true})
        }
    
    }
    paginationNextButtonClicked = (event,itemsLength,tableSize) => {
        console.log('length of items in operators : ',itemsLength)
        this.setState({paginationButton:event.target.value,
        tableStart:this.state.tableStart+tableSize,
        previousButtonDisabled:false,
        paginationButtonCliked:true})
        console.log('table start and itemlength is : ',this.state.tableStart,tableSize,itemsLength)
        if(((itemsLength %2 ===0) && ((tableSize+tableSize)===itemsLength))
        || (this.state.tableStart+tableSize+1)===itemsLength){
            this.setState({nextButtonDisabled:true})
        }

        if(this.state.tableStart+tableSize+tableSize===itemsLength){
            this.setState({nextButtonDisabled:true})
        }
   

    }
    onChangeHandler = (event) => {
        console.log('[Operator] onChangeHandler')
        this.setState({operatorName:event.target.value,
                    LoginButtonDisable:false})
    }
    // componentWillReceiveProps(){
    //     console.log('[Operstors] componentWillReceiveProps')
        
    //     console.log(this.props.orders)

    // }

    deliveryDropDown = (event) => {
        console.log("entered into delivery drop own....")
        this.setState({shippingStatus:event.target.value},()=>{
            console.log('state is here in  : ',this.state.shippingStatus)
            if(this.state.shippingStatus==='D' || 
            this.state.shippingStatus==='S' || 
            this.state.shippingStatus==='T' ||
            this.state.shippingStatus==='R'){
                console.log("entered to call update",this.state.operatorName)
            this.props.updateStatusByOperator(this.state.orderId,this.state.shippingStatus)
            }
            console.log('crossed..........!!')
            this.props.getItems(this.state.operatorName)
            console.log('props in deliveryDropdown are : ',this.props.orders)

        })
        //  this.props.getItems(this.state.operatorName)
        // this.props.updateStatusByOperator(this.state.orderId,this.state.shippingStatus)
    }
    render() {
        // this.props.getItems(this.state.operatorName)
        console.log('entered into render')
        let itemsInTable=[...this.props.orders]
        const tableSize=2
        const itemsLength=itemsInTable.length;
        console.log("entered into render...itemInTable is : ",itemsLength,itemsInTable)
        let disableAllPButtons=false
        if(itemsLength<=tableSize){
            disableAllPButtons=true
        }

        if(this.state.paginationButton==='First'){
            console.log('[CART] ENTERED INTO FIRST')
            console.log("length of itemsInTable is : ",itemsInTable.length)
            const firstElement=itemsInTable.slice(this.state.tableStart,
                                    this.state.tableStart+tableSize)
            console.log('First button firstElement value is : ',firstElement)
            itemsInTable=firstElement
            // this.updateTableStart(tableSize)
            console.log('[First] tableStart in',this.state.tableStart)
            
        }
        else if(this.state.paginationButton==='Last'){
            console.log('[CART] ENTERED INTO LAST')
            console.log("length of itemsInTable is : ",itemsInTable.length)
            const LastElement=itemsInTable.slice(itemsInTable.length-tableSize,itemsInTable.length)
            console.log('Last button LastElement value is : ',LastElement)
            itemsInTable=LastElement
            
        }
        else if(this.state.paginationButton==='Previous'){
            console.log('[CART] ENTERED INTO PREVIOUS')
            console.log("length of itemsInTable is : ",itemsInTable.length)
            let PreviousElement=[]
            if(this.state.tableStart<0){
                PreviousElement=itemsInTable.slice(0,
                    1)
            }
            else{
                PreviousElement=itemsInTable.slice(this.state.tableStart,
                    this.state.tableStart+tableSize)
            }
           
            console.log('Previous button firstElement value is : ',PreviousElement)
            itemsInTable=PreviousElement
            // this.updateTableStart(tableSize)
            console.log('[Previous] tableStart in',this.state.tableStart)
            
        }
        else if(this.state.paginationButton==='Next'){
            console.log('[CART] ENTERED INTO NEXT')
            console.log("length of itemsInTable is : ",itemsInTable.length)
            const nextElement=itemsInTable.slice(this.state.tableStart,
                                                    this.state.tableStart+tableSize)
            console.log('Previous button firstElement value is : ',nextElement)
            itemsInTable=nextElement
            // this.updateTableStart(tableSize)
            console.log('[Next] tableStart in',this.state.tableStart)
            
        }
        else{
            itemsInTable=itemsInTable.slice(this.state.tableStart,this.state.tableStart+tableSize)
        }
        let displayItems='items'
        if(itemsInTable.length<=0){
            displayItems=<div className='not-orders'>No orders found</div>
        }
        else{

            displayItems=(
                <div>
                <div class="operatorTableBox">
                <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Order Id</th>
                        <th>Ordered Date</th>
                        <th>Current Delivery Status</th>
                        <th>Update Delevery Status</th>
                    </tr>
                </thead>
                <tbody>{console.log('before rendering table : ',itemsInTable)}
                    {itemsInTable.map((item,index)=>
                    
                    <tr>{console.log('item name is :',Object.keys(item).map(key=>key).map(key=>
                    console.log("nested items are : ",key)))}
    
                        <td><input type="radio" name='rd-button'
                        value={Object.keys(item).map(key=>key).map(key=>key)} 
                        onClick={this.rdButtonDeliveryStatusUpdate}
                        /></td>
                        <td>{[Object.values(item).map(key=>key.itemName)].join('')}</td>
                        <td>{[Object.values(item).map(key=>key.price)].join('')}</td>
                        <td>{[Object.values(item).map(key=>key.quantity)].join('')}</td>
                        <td>{Object.keys(item).map(key=>key).map(key=>key)}</td>
                        <td>{[Object.values(item).map(key=>key.orderedDate)].join('')}</td>
                        {console.log('object value isdidididid : ',[Object.values(item).map(key=>key.shippingStatus)].join())}
                        {[Object.values(item).map(key=>key.shippingStatus)].join()==='1' ? <td>Shipped</td> :
                            [Object.values(item).map(key=>key.shippingStatus)].join()==='2' ? <td>Transist</td> :
                                [Object.values(item).map(key=>key.shippingStatus)].join()==='3' ? <td>Delivered</td> :
                                <td>Returned</td>}
                        {console.log('shipping status is : ',Object.keys(item).map(key=>console.log(key)))}
                         {/* <td>{Object.values(item).map(key=>key.shippingStatus)}</td> */}
                        <td>
                            <select disabled={this.state.dropDownDisabled} onChange={this.deliveryDropDown} className='drop-down'>
                                <option>Change Status</option>
                                
                                <option>S</option>
                                <option>T</option>
                                <option>D</option>
                                <option>R</option>
                            </select>
                        </td>
    
                    </tr>
    
                    )}
                        
                    
                    
                </tbody>
            </table>
            </div>
            
            <div className='pagination1'>
           <span> <button disabled={disableAllPButtons ? true : this.state.firstButtonDisabled}
                    value="First" 
                    onClick={(event)=>this.paginationFirstButtonClicked(event,tableSize)}>First</button></span>
           <span> <button  disabled={disableAllPButtons ? true :this.state.previousButtonDisabled}
                value="Previous" 
                        onClick={(event)=>this.paginationPreviousButtonClicked(event,tableSize)}>Previous</button></span>
           <span> <button  disabled={disableAllPButtons ? true :this.state.nextButtonDisabled}
                value="Next" 
                        onClick={(event)=>this.paginationNextButtonClicked(event,itemsLength,tableSize)}>Next</button></span>
           <span> <button  disabled={disableAllPButtons ? true :this.state.lastButtonDisabled}
                value="Last" 
                        onClick={(event)=>this.paginationLastButtonClicked(event,itemsLength,tableSize)}>Last</button></span>
    
        </div>
        </div>
            )

        }
       
        return (
            <div>
                <div className='user'>
                <label className='Label' >Username</label>
                <input className='InputElement' type='text' onChange={this.onChangeHandler}/>   
                <Button disabled={this.state.LoginButtonDisable} btnType="Success"
                                clicked={this.buttonClicked}>Submit</Button>             
                </div>
                {/* <div class="table-box"> */}
                
                {this.state.displayTable ? displayItems : null}
           
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        operatorName:state.validation.loginAs,
        orders:state.orderReducer.orderDetails,


    }
}

const mapDispatchToProps = dispatch => {
    return{
        getItems:(operatorname)=>dispatch(actionCreators.getOrdersDetails(operatorname)),
        updateStatusByOperator:(orderId,shippingStatus)=>dispatch(actionCreators.updationByOperator(orderId,shippingStatus))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Operator);