import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../../actions/user';
import MainNavbar from '../navbar/main-navbar';
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    login(userData);
  };

  passwordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleLoginChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      nextProps.loginErrors && toast.error(nextProps.loginErrors);

    return !nextProps.loading && alertMessage;
  };
  render() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (token) {
      if(user.type === 'client'){
      return <Redirect to='/displayclient'/>
      }
      else{
        return <Redirect to='/displayproduct'/>        
      }
    }
    return (
      <div>
      <MainNavbar/>
      <div id='layout white' style={{marginTop:'-3%'}}>
        <div className='container'>
          <div>
            <div className='card-form' style={{width:'40%', marginLeft:'auto', marginRight:'auto'}}>
              <ToastContainer
                position={toast.POSITION.TOP_CENTER}
                className='toastMessages'
                style={{ width: '500px' }}
              />
              <div className='card-header'>
                <h3 className='text-center font-weight-light my-4'>Login</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleSubmit}>
                  <label className='small mb-1'>Email</label>
                  <input
                    name='email'
                    type='text'
                    placeholder='Enter email address'
                    className='form-control py-4'
                    onChange={this.handleLoginChange}
                  ></input>
                  <br></br>
                  <label className='small mb-1'>Password</label>
                  <input
                    type='password'
                    placeholder='Enter password'
                    className='form-control py-4'
                    onChange={this.passwordChange}
                  ></input>
                  <div className='form-group'>
                    <button className='btn btn-success btn-block '>Login</button>
                  </div>
                </form>
              </div>
              <div className='card-footer'>
                <Link to='/signup'>Need an account? Sign up!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { token, loading, loginErrors, data } }) => ({
  token,
  loading,
  loginErrors,
  data,
});
export default connect(mapStateToProps, { login })(Login);
