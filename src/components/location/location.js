import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../navbar/admin-navbar';
// import './login.css';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <div>
      <AdminNavbar/>
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
                <h3 className='text-center font-weight-light my-4'>Create Location</h3>
              </div>
              <div className='body'>
                <form className='form-group'>
                  <label className='small mb-1'>Province</label>
                  <input
                    name='Location'
                    type='text'
                    placeholder='Enter Location name'
                    className='form-control py-4'
                  ></input>
                  <label className='small mb-1'>District</label>
                  <input
                    name='Location'
                    type='text'
                    placeholder='Enter Location name'
                    className='form-control py-4'
                  ></input>
                  <label className='small mb-1'>Sector</label>
                  <input
                    name='Location'
                    type='text'
                    placeholder='Enter Location name'
                    className='form-control py-4'
                  ></input>
                  <div className='form-group'>
                    <button className='btn btn-success btn-block' style={{
                      backgroundColor:'#4cc23c',
                      opacity:'0.7'
                    }}>Create</button>
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


export default connect()(Location);
