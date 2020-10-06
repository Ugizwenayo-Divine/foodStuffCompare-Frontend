import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import AdminNavbar from '../navbar/admin-navbar';
import categoryActions from '../../actions/category';
// import './login.css';
const {
  addCategory
} = categoryActions;

class Category extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  handleChange = (event) => {
    this.setState({
      name:event.target.value
    });
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
      name:this.state.name
    }
    this.props.addCategory(data);
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.categoryErrors && toast.error(nextProps.categoryErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    return (
      <div>
      <AdminNavbar/>
      <div id='layout white'>
        <div className='container'>
          <div>
            <div className='card-form' style={{width:'40%', marginLeft:'auto', marginRight:'auto'}}>
              <ToastContainer
                position={toast.POSITION.TOP_CENTER}
                className='toastMessages'
                style={{ width: '500px' }}
              />
              <div className='card-header'>
                <h3 className='text-center font-weight-light my-4'>Create Category</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleSubmit}>
                  <label className='small mb-1'>Category</label>
                  <input
                    name='category'
                    type='text'
                    placeholder='Enter category name'
                    onChange={this.handleChange}
                    className='form-control py-4'
                  ></input>
                  <br/>
                  <div className='form-group'>
                    <button className='btn btn-success btn-block'>Create</button>
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
const  mapStateToProps = ({addCategory:{loading,message,categoryErrors}}) => {
  return {
    loading,
    message,
    categoryErrors
  }
}

export default connect(mapStateToProps,{addCategory})(Category);
