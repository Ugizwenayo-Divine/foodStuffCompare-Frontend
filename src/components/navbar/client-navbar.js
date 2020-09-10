import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../../actions/user';
import './admin-navbar.css';

class ClientNavbar extends Component {
  
  handleLogout = () =>{
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.logout(token);
  }
  render(){
      return (
        <div 
          className='navbar navbar-expand-xl navbar-light client-nav' 
          style={{
            width:'100%',
            marginLeft:'0%',}}>
          <span className="nav-item active">
            <a className="nav-link" href="/">COMPARE</a>
          </span>
          <span className="nav-item active">
            <a className="nav-link" href="/displayclientorders">MY ORDERS</a>
          </span>
          <span 
            className='nav-item ml-auto log' 
            onClick={this.handleLogout}
            style={{cursor:'pointer'}}
          >LOGOUT</span>
        </div>
      )
  }
}
export default connect(null,{logout})(withRouter(ClientNavbar));