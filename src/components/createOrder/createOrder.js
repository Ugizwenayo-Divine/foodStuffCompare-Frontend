import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import Select from 'react-select';
import {addOrder} from '../../actions/order';
import ProductOrder from '../productOrder/productOrder';
import ClietNavbar from '../navbar/client-navbar';
import AdminNavbar from '../navbar/admin-navbar';
import './createOrder.css';

class CreateOrders extends Component {
  constructor(){
    super();
    this.state={
      quantity:0,
      payment_options:'',
      visible:false,
      order:{},
      user:{},
      price:'',
    }
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
  }
	componentWillReceiveProps = (nextProps) => {
    if(!this.props.loading && this.props.data){
      this.setState({order:this.props.data?this.props.data:null});
    }
    if(nextProps.data){
      this.setState({visible:true});
    }
    const alertMessage =
      (nextProps.orderErrors && toast.error(nextProps.orderErrors));

    return !nextProps.loading && alertMessage;
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSelection = (event) => {
    this.setState({
      payment_options: event.value,
    });
  };
  viewProductOrder=() =>{
    this.setState({visible:!this.state.visible});
  }
  submitOrder = (event,product) =>{
    event.preventDefault();
    const {addOrder} = this.props;
    const data={
      productId: product.id,
      quantity: this.state.quantity,
      payment_options: this.state.payment_options
    }
    console.log('real data',data);
    addOrder(data);
    
  }
  cancelOrder = () =>{
    this.props.history.push('/displayclient');
  }
  render (){
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    if (!this.props.location.state) {
      return <Redirect to='/'/>
    }
    const {product}=this.props.location.state;
    const options = [
      { value: 'momo', label: 'momo' }
    ];
    return (
        <div>
        {this.state.user.type === 'client'?<ClietNavbar />:null}
				<div id='layout'>
        <div className='container'>
        {this.state.user.type === 'admin'?<AdminNavbar />:null}
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '750px' }}
          />
          <div className='card-form order-form'>
            <div className='card-header'>
              <h3 className='text-center font-weight-light my-4'>
                Order the product
              </h3>
            </div>
            <div className='card-body col-md-offset-3' style={{height:'auto'}}>
              <form onSubmit={this.handleSubmit} style={{height:'100%'}}>
              <div className='card-field'>
                <div className='col-md-9'>
                    <label className='large mb-1'>Product</label>
                    <input
                      name='product'
                      className='form-control py-2'
                      value={product.name}
                      readOnly
                      onChange={this.handleChange}
                    ></input>
                  </div>
                <div className='col-md-9'>
                    <label className='large mb-1'>Category</label>
                    <input
                      name='product'
                      className='form-control py-2'
                      value={product.Category.name}
                      readOnly
                      onChange={this.handleChange}
                    ></input>
                  </div>
                <div className='col-md-9'>
                    <label className='large mb-1'>Market</label>
                    <input
                      name='product'
                      className='form-control py-2'
                      value={product.Market.name}
                      readOnly
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'>Price</label>
                    <input
                      name='price'
                      className='form-control py-2'
                      value={product.price}
                      readOnly
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'>Quantity</label>
                    <input
                      name='quantity'
                      className='form-control py-2'
                      placeholder='Enter quantity to order'
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'
                    >Payment_options</label>
                      <Select options={options} onChange={this.handleSelection}/>
                    
                  </div>
                  </div>
                <div className='form-group order-button'>
                  <button className='btn btn-success col-md-5' 
                    onClick={(event)=>{this.submitOrder(event,product)}}
                    disabled={this.state.quantity && this.state.payment_options ? false :true}
                  >
                    Order
                  </button>
									<button className='btn btn-danger col-md-5' onClick={this.cancelOrder}>
                    cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div style={{visibility:this.state.visible}}>
        <ProductOrder 
          visible={this.state.visible} 
          order={this.state.order}
          transportCost={this.state.price}
          bonus={this.state.bonus}
          user={this.state.user}
          product={product}
          clicked={this.viewProductOrder} />
          </div>
        </div>
      </div>
      </div>
    )
    
	}
}
const mapStateToProps = ({order:{loading,orderErrors,data,message}}) => {
  return {
    loading,
    orderErrors,
    data,
    message,   
  }
}
 export default connect (mapStateToProps,{
   addOrder:addOrder,
  })(CreateOrders);