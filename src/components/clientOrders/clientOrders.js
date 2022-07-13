import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getClientOrders,cancelOrder} from '../../actions/order';
import ClientOrdersSkeleton from './clientOrdersSkeleton';
import ClietNavbar from '../navbar/client-navbar';
import AdminNavbar from '../navbar/admin-navbar';
import {orderPayment} from '../../actions/order';
import './clientOrders.css';

class ClientOrders extends Component{
  constructor(){
    super();
    this.state={
      user:{},
    }
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
    const {getClientOrders} = this.props;
    getClientOrders();
  }
  handlePay(id){
    const {orderPay} = this.props;
    const data={
      id:id
    };
    orderPay(data);
  }
  handleCancel(event,id){
    const {cancelOrder} = this.props;
    event.preventDefault();
    cancelOrder(id);
  }
  render (){
    const {loading, data, cancelLoading, canceledMessage}=this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    const margTop = this.state.user.type === 'admin'?'5%':'2%';
    if(this.props.paymentData){      
     window.location=this.props.paymentData.redirect;
    }
    if(!cancelLoading && canceledMessage){
      window.location.reload();
    }
    console.log(this.props.canceledMessage,'for cancel');
    return (
      <div style={{width:'100%'}}>
        {this.state.user.type === 'client'?<ClietNavbar />:null}
        <div className='table-responsive-md container'>
        {this.state.user.type === 'admin'?<AdminNavbar />:null}
          <h4 style={
            {
              textAlign: 'center',
              fontFamily: 'Montserrat',
              marginTop:margTop
          }
          }>{this.state.user.firstName} {this.state.user.lastName} orders</h4>
          {((!loading && data) ? <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
          <thead className='thead-dark'>
            <tr>
            <th>OrderNumber</th>
            <th>Product</th>
            <th>Ordered Qty</th>
            <th>Total price</th>
            <th>status</th>
            <th>Action</th>
            </tr>
          </thead>
          {data.map(dt=>{
          return (<tbody  key={dt.id}>
              <tr>
              <td>{dt.id}</td>
              <td>{dt.product}</td>
              <td>{dt.ordered_quantity} kg</td>
              <td>{dt.amount}{dt.currency}</td>
              <td>{dt.status}</td>
              <td>
                <button 
                  type="button" 
                  className='btn btn-success py-0' 
                  style={{width:'80px'}}
                  disabled={(dt.status==='payed'||dt.status==='delivered'||dt.status==='discounted')?true:false}
                  onClick={()=>{this.handlePay(dt.id)}}
                  >PAY</button> &nbsp;
                <button 
                  type="button" 
                  className='btn btn-danger py-0'
                  disabled={(dt.status==='payed'||dt.status==='delivered'||dt.status==='discounted')?true:false}
                  onClick={(event)=>{this.handleCancel(event,dt.id)}}
                  >CANCEL</button>
              </td>            
              </tr>
          </tbody>)})}
          </table>:<ClientOrdersSkeleton/>)}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.payment.data,'statesss')
    return {
      loading:state.clientOrders.loading,
      orderErrors:state.clientOrders.orderErrors,
      data:state.clientOrders.data,
      message:state.clientOrders.message,
      paymentData:state.payment.data,
      cancelLoading:state.cancelOrder.loading,
      canceledMessage:state.cancelOrder.message,
    }
  }
export default connect(mapStateToProps, {getClientOrders:getClientOrders,orderPay:orderPayment, cancelOrder:cancelOrder})(ClientOrders);