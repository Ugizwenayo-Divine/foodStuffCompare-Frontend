import React from 'react';
import './admin-navbar.css';

const AdminNavbar= () => {
      return (
        <div 
          className='navbar navbar-expand-xl navbar-light client-nav' 
          style={{
            width:'100%',
            marginLeft:'0',}}>
          <span className="nav-item active">
            <a className="nav-link" href="/">HOME</a>
          </span>
          <span className="nav-item ml-auto">
            <a className="nav-link" href="/signup">SIGNUP</a>
          </span>
          <span className="nav-item">
            <a className="nav-link" href="/login">LOGIN</a>
          </span>
        </div>
      )
}
export default AdminNavbar;