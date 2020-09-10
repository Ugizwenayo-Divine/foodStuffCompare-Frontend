import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import DisplayProductSkeleton from './display-product-skeleton';
import AdminNavbar from '../navbar/admin-navbar';
import marketReducers from '../../actions/market';
import generatePDF from '../../helpers/helperFunctions';

const {
  displayMarket,
  deleteMarket,
  getMarket,
} = marketReducers;
class AllUsers extends Component{
  constructor(){
    super();
    this.state={
      user:{},
      Search:null,

    }
  }
  componentDidMount(){
      const {displayMarket} = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
    displayMarket();
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { getMarket } = this.props;
      getMarket(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { displayMarket } = this.props;
      displayMarket();
  };
  handleDelete(id){
    const {deleteMarket} = this.props;
    deleteMarket(id);
  }
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa',data);
    const token = localStorage.getItem('token');
    if(token === undefined || token === ' ' || token === null){
      return alert('not logged in');      
    }
    else{
      this.props.history.push({
        pathname: pathToMyComponent,
        state: {market: data}
      });
    }
  }
  handleReport(event,data) {
    event.preventDefault();
    generatePDF('market',data);
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.marketErrors && toast.error(nextProps.marketErrors));

  return !nextProps.loading && alertMessage;    
  }
  render (){
    const {loading, markets }=this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    return (
      <div style={{width:'100%'}}>
      <AdminNavbar />
        <div className='container'>
        <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
        <div className='table-responsive-md'  style={{marginTop:'5.8%'}}>
        <nav className="navbar navbar-light" style={{width:'100%', marginLeft:'0%'}}>
          <h4 className="navbar-brand" style={{fontSize:'24px',color:'#8f8d8d',fontFamily:'Montserrat'}}>All Markets</h4>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input 
              className="form-control py-2 mr-sm-2"
              name='search'
              placeholder='Search'
              onChange={this.handleChange}
              type="search"/>
            <button className="btn btn-outline-success my-2 my-sm-0 mr-sm-2" type="submit">Search</button>
            <button 
              className="btn btn-outline-success my-2 my-sm-0 mr-sm-2"
              onClick={this.handleAll}
              type="button">ALL</button>
              <button 
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={(event)=>{this.handleReport(event,markets)}}
              type="button">REPORT</button>
          </form>
        </nav>
          {((!loading && markets) ? <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
          <thead className='thead-dark'>
            <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Province</th>
            <th>District</th>
            <th>Sector</th>
            <th>Action</th>
            </tr>
          </thead>
          {markets.map(dt=><tbody  key={dt.id}>
              <tr>
              <td>{dt.name}</td>
              <td>{dt.code}</td>
              <td>{dt.province}</td>
              <td>{dt.district}</td>
              <td>{dt.sector}</td>
              <td>
              {/* <button 
                  type="button" 
                  className='btn btn-secondary py-0 mr-sm-2' 
                  // style={{width:'35%'}}
                  onClick={()=>{this.handleUpdate('/updatequantity',dt)}}
                  >ADD QTY</button> */}
                <button 
                  type="button" 
                  className='btn btn-success py-0 mr-sm-2' 
                  // style={{width:'35%'}}
                  onClick={()=>{this.handleUpdate('/updatemarket',dt)}}
                  >UPDATE</button>
                <button 
                  type="button" 
                  className='btn btn-danger py-0 mr-sm-2'
                  onClick={()=>{this.handleDelete(dt.id)}}>DELETE</button>
              </td>            
              </tr>
            </tbody>)}
          </table>:null)}
        </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({markets:{loading, markets, message, marketErrors}}) => {
    return {
        loading,
        message,
        markets,
        marketErrors,
    }
  }
export default connect(mapStateToProps,{displayMarket,deleteMarket,getMarket})(AllUsers);