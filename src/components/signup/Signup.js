import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import MainNavbar from '../navbar/main-navbar';
import { signup } from '../../actions/user';
import './signup.css';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      gender: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { signup } = this.props;
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      gender: this.state.gender,
    };

    signup(userData);
  };

  genderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleSignupChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.loginErrors && toast.error(nextProps.loginErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    return (
      <div>
        <MainNavbar/>
      <div id='layout white' style={{marginTop:'-3%'}}>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '750px' }}
          />
          <div className='card-form'>
            <div className='card-header'>
              <h3 className='text-center font-weight-light my-4'>
                Create Account
              </h3>
            </div>
            <div className='card-body'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>First Name</label>
                    <input
                      name='firstName'
                      className='form-control py-4'
                      placeholder='Enter first name'
                      onChange={this.handleSignupChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Last Name</label>
                    <input
                      name='lastName'
                      className='form-control py-4'
                      placeholder='Enter last name'
                      onChange={this.handleSignupChange}
                    ></input>
                  </div>
                </div>
                <div className='form-row'>
                <div className='col-md-8'>
                  <label className='small mb-1'>Email</label>
                  <input
                    name='email'
                    type='email'
                    className='form-control py-4'
                    placeholder='Enter email address'
                    onChange={this.handleSignupChange}
                  ></input>
                </div>
                  <div className='col-md-4' style={{marginTop:'5%'}}>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="male" 
                      id="male" 
                      value="male"                      
                      onChange={this.genderChange}
                    />
                    <label className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="female" 
                      id="female" 
                      value="female"
                      onChange={this.genderChange}
                    />
                    <label className="form-check-label">
                      Female
                    </label>
                  </div>
                  </div>
                  </div>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Phone Number</label>
                    <input
                      name='phoneNumber'
                      className='form-control py-4'
                      placeholder='Enter phone number'
                      onChange={this.handleSignupChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Password</label>
                    <input
                      name='password'
                      type='password'
                      className='form-control py-4'
                      placeholder='Enter password'
                      onChange={this.handleSignupChange}
                    ></input>
                  </div>
                  {/* <div className='col-md-4'>
                    <label className='small mb-1'>Gender</label>
                    <br />
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        value='Male'
                        onChange={this.genderChange}
                      />
                      <label className='form-check-label'>Male</label>
                      <br></br>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        value='Female'
                        onChange={this.genderChange}
                      />
                      <label className='form-check-label'>Female</label>
                    </div>
                  </div> */}
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-success btn-block'>
                    Create Account
                  </button>
                </div>
              </form>
            </div>
            <div className='card-footer'>
              <Link to='/login'>Have an account? Go to login</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  user: { token, loading, loginErrors, message },
}) => ({
  token,
  loading,
  loginErrors,
  message,
});
export default connect(mapStateToProps, { signup })(Signup);