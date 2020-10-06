import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { newProduct } from '../../actions/product';
// import './addproduct.css';

class AddingProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category: '',
      image: '',
      price: '',
      brand: '',
      due_time: '',
      quantity: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('category', this.state.category);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    formData.append('price', this.state.price);
    formData.append('brand', this.state.brand);
    formData.append('due_time', this.state.due_time);
    formData.append('quantity', this.state.quantity);

    this.props.newProduct(formData);
  };
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  categoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  imageChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.files) {
      this.setState({ [event.target.id]: event.target.files[0] });
    }
  };

  priceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  brandChange = (event) => {
    this.setState({ brand: event.target.value });
  };

  due_timeChange = (event) => {
    this.setState({ due_time: event.target.value });
  };

  quantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.productErrors && toast.error(nextProps.productErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    return (
      <div id='layout'>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '500px' }}
          />
          <div className='formProduct'>
            <div className='headerProduct'>
              <h3 className='text-center font-weight-light my-4'>
                Add Product
              </h3>
            </div>
            <div className='bodyProduct'>
              <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Name</label>
                    <input
                      name='name'
                      className='form-control py-4'
                      placeholder='Enter the name of the product'
                      onChange={this.nameChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Category</label>
                    <input
                      name='category'
                      className='form-control py-4'
                      placeholder='Enter the category'
                      onChange={this.categoryChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Price</label>
                    <input
                      name='price'
                      className='form-control py-4'
                      placeholder='Enter the price'
                      onChange={this.priceChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Brand</label>
                    <input
                      name='brand'
                      className='form-control py-4'
                      placeholder='Enter the brand'
                      onChange={this.brandChange}
                    ></input>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Image</label>
                    <br></br>
                    <input
                      type='file'
                      className=''
                      id='image'
                      onChange={this.imageChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Due Time</label>
                    <input
                      name='due_time'
                      className='form-control py-4'
                      placeholder='Enter the due time'
                      onChange={this.due_timeChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Quantity</label>
                    <input
                      name='quantity'
                      className='form-control py-4'
                      placeholder='Enter the quantity'
                      onChange={this.quantityChange}
                    ></input>
                  </div>
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block'>
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddingProduct.propTypes = {
  productErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({ product: { loading, productErrors, message } }) => ({
  loading,
  productErrors,
  message,
});
export default connect(mapStateToProps, {
  newProduct,
})(AddingProduct);
