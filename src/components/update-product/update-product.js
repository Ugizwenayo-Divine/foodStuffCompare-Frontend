import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import productActions from '../../actions/product';
import AdminNavbar from '../navbar/admin-navbar';
import categoryActions from '../../actions/category';
import marketActions from '../../actions/market';
// import './login.css';
const {
  displayCategories
} = categoryActions;
const {
  displayMarket
} = marketActions;

const {
  updateProduct
} = productActions;
class UpdateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      category:'',
      market:'',
      image:'',
      description:'',

    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  imageChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.files) {
      this.setState({ [event.target.id]: event.target.files[0] });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const product = this.props.location.state?this.props.location.state.product:null;
    console.log('statess', this.state);
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('categoryId', this.state.category);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    formData.append('price', this.state.price.split(' ')[0]);
    formData.append('marketId', this.state.market);
    formData.append('description', this.state.description);

    this.props.updateProduct(product.id,formData);
  };
  componentDidMount(){
    const product = this.props.location.state?this.props.location.state.product:null;
    const {displayCategories,displayMarket} = this.props;
    displayCategories();
    displayMarket();
    if(product){
      console.log(product,'lll');
    this.setState({
      name:product.name,
      category:product.categoryId,
      image:product.image,
      price:product.price,
      market:product.marketId,
      description:product.description,
    });}
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.productErrors && toast.error(nextProps.productErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const {markets, categories} = this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    if (!this.props.location.state) {
      return <Redirect to='/displayproduct'/>
    }
    return (
      <div>
      <AdminNavbar/>
      <div id='layout white' style={{marginTop:'-4%'}}>
        <div className='container'>
          <div>
            <div className='card-form' style={{width:'60%', marginLeft:'auto', marginRight:'auto'}}>
              <ToastContainer
                position={toast.POSITION.TOP_CENTER}
                className='toastMessages'
                style={{ width: '500px' }}
              />
              <div className='card-header'>
                <h3 className='text-center font-weight-light my-4'>Update Product</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Name</label>
                    <input
                      name='name'
                      className='form-control py-4'
                      placeholder='Enter product name'
                      value={this.state.name}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Price</label>
                    <input
                      name='price'
                      className='form-control py-4'
                      placeholder='Enter product price'
                      value={this.state.price}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-md-6'>
                  <label className='small mb-1'>Category</label>
					<select className="custom-select" name="category" onChange={this.handleChange}>
						<option defaultValue>{this.state.category}</option>
						{categories?categories.map(dt=>(<option value={dt.id} key={dt.id}>{dt.name}</option>)):null}
					</select></div>
                  <div className='col-md-6'>
                  <label className='small mb-1'>Market</label>
					<select className="custom-select" name="market" onChange={this.handleChange}>
						<option defaultValue>{this.state.market}</option>
						{markets?markets.map(dt=>(<option value={dt.id} key={dt.id}>{dt.name}</option>)):null}
					</select>
          </div>
          </div>
          <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Image</label>
                    <br></br>
                    <input
                      type='file'
                      id='image'
                      onChange={this.imageChange}
                    ></input>
                  </div>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Description</label>
                    <textarea
                      rows='4'
                      cols='20'
                      name='description'
                      className='form-control py-4'
                      placeholder='Enter the description'
                      value={this.state.description}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                </div>
                  <div className='form-group'>
                    <button className='btn btn-success btn-block' style={{
                      backgroundColor:'#4cc23c',
                      opacity:'0.7'
                    }}>Update</button>
                  </div>
                </form>
              </div>
              <div className='card-footer'>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = ({ markets:{markets},categories:{categories}, updateProduct: { loading, productErrors, message } }) => ({
  loading,
  markets,
  categories,
  productErrors,
  message,
});
export default connect(mapStateToProps, {
  updateProduct:updateProduct,
  displayCategories,
  displayMarket,
})(UpdateProduct);
