import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Select from 'react-select';
import {order} from '../../../actions/order';
import './createOrder.css';

class CreateOrders extends Component {
  constructor(){
    super();
    this.state={
      quantity:'',
      payment_options:''
    }
  }
	componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
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
  submitOrder = (event,product) =>{
    event.preventDefault();
    const {addOrder} = this.props;
    const data={
      productId: product.id,
      quantity: this.state.quantity,
      payment_options: this.state.payment_options,
    }
    addOrder(data);
    // this.props.history.push('/');
  }
  cancelOrder = () =>{
    this.props.history.push('/');
  }
  render (){
    const {product}=this.props.location.state;
    console.log(this.props,'oredrprop');
    const options = [
      { value: 'card', label: 'card' },
      { value: 'momo', label: 'momo' }
    ]
		return (
				<div id='layout'>
        <div className='container'>
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
            <div className='card-body col-md-offset-3'>
              <form onSubmit={this.handleSubmit}>
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
                <br />
                <div className='form-group order-button'>
                  <button className='btn btn-secondary col-md-5' onClick={(event)=>{this.submitOrder(event,product)}}>
                    Order
                  </button>
									<button className='btn btn-danger col-md-5' onClick={this.cancelOrder}>
                    cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
    
	}
}
CreateOrders.propTypes = {
  orderErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = (state) => {
  return {
    loading:state.createOrder.loading,
    orderErrors:state.createOrder.orderErrors,
    data:state.createOrder.data,
    message:state.createOrder.message
  }
}
 export default connect (mapStateToProps,{addOrder:order})(CreateOrders);