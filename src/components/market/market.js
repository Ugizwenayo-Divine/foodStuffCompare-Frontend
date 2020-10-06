import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import AdminNavbar from '../navbar/admin-navbar';
import locationActions from '../../actions/location';
import marketActions from '../../actions/market';
// import './login.css';

const {
  getAll,
  getAllByDistrict,
  getAllByProvince,
  getAllProvinces,
  getAllSectors,
} = locationActions;
const {
  addMarket
} = marketActions;
class Market extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      code: '',
      province: '',
      district: '',
      sector: '',
    };
  }
  componentDidMount(){
    const {getAll,getAllSectors,getAllProvinces} = this.props;
    getAll();
    getAllSectors();
    getAllProvinces();

  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.marketErrors && toast.error(nextProps.marketErrors));

    return !nextProps.loading && alertMessage;
  };
  handleProvince = (event) => {
    this.setState({
      province: event.target.options[event.target.selectedIndex].text,
    });
    this.props.getAllByProvince(parseInt(event.target.value));
  }
  handleDistrict = (event) => {
    this.setState({
      district: event.target.options[event.target.selectedIndex].text,
    });
    this.props.getAllByDistrict(parseInt(event.target.value));
  }
  
  handleSector = (event) => {
    this.setState({
      sector: event.target.options[event.target.selectedIndex].text,
    });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {name,code,province,district,sector} = this.state;
    
    const data = {
      name,
      code,
      province,
      district,
      sector,
    };
    this.props.addMarket(data);
  };
  render() {
    const {
      provinces,
      districts,
      sectors,

    } = this.props;
    
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
                <h3 className='text-center font-weight-light my-4'>Create Market</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-8'>
                    <label className='small mb-1'>Name</label>
                    <input
                      name='name'
                      className='form-control py-4'
                      placeholder='Enter market name'
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-4'>
                    <label className='small mb-1'>Code</label>
                    <input
                      name='code'
                      className='form-control py-4'
                      placeholder='Enter market code'
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                  <label className='small mb-1'>Province</label>
					<select className="custom-select" onChange={this.handleProvince}>
						<option defaultValue>Choose...</option>
            {provinces? provinces.map(dt=>(<option key={dt.id} value={dt.id}>{dt.name}</option>)):null}
					</select>
                  <label className='small mb-1'>District</label>
					<select className="custom-select" onChange={this.handleDistrict}>
						<option defaultValue>Choose...</option>
            {districts? districts.map(dt=>(<option key={dt.id} value={dt.id}>{dt.name}</option>)):null}
					</select>
                  <label className='small mb-1'>Sector</label>
					<select className="custom-select" onChange={this.handleSector}>
						<option defaultValue>Choose...</option>
            {sectors? sectors.map(dt=>(<option key={dt.id} value={dt.id}>{dt.name}</option>)):null}
					</select>
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

const mapStateToProps = ({
  displayProvince,
  displayDistrict,
  displaySector,
  addMarket:{message,loading,marketErrors}
}) =>{
  console.log('state', displayProvince)
  return({
  provinces:displayProvince.data,
  districts:displayDistrict.data,
  sectors:displaySector.data,
  message,
  loading,
  marketErrors,
})}

export default connect(mapStateToProps,{
  getAll,
  getAllByDistrict,
  getAllByProvince,
  getAllProvinces,
  getAllSectors,
  addMarket
})(Market);
