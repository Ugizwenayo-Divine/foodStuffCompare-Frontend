import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import DisplayProductSkeleton from './display-product-skeleton';
import AdminNavbar from '../navbar/admin-navbar';
import {allUsers,getUser} from '../../actions/user';
import generatePDF from '../../helpers/helperFunctions';


class AllUsers extends Component{
  constructor(){
    super();
    this.state={
      user:{},
      search:null,
    }
  }
  componentDidMount(){
      const {allUsers} = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
    allUsers();
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { getUser } = this.props;
      getUser(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { allUsers } = this.props;
      allUsers();
  };
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa',data);
    const token = localStorage.getItem('token');
    if(token === undefined || token === ' ' || token === null){
      return alert('not logged in');      
    }
    else{
      this.props.history.push({
        pathname: pathToMyComponent,
        state: {user: data}
      });
    }
  }
  handleReport(event,data) {
    event.preventDefault();
    generatePDF('user',data);
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.userErrors && toast.error(nextProps.userErrors));

  return !nextProps.loading && alertMessage;    
  }
  render (){
    const {loading, data }=this.props;
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
          <h4 className="navbar-brand" style={{fontSize:'24px',color:'#8f8d8d',fontFamily:'Montserrat'}}>All users</h4>
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
              onClick={(event)=>{this.handleReport(event,data)}}
              type="button">REPORT</button>
          </form>
        </nav>
          {((!loading && data) ? <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
          <thead className='thead-dark'>
            <tr>
            <th>Names</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Type</th>
            <th>Action</th>
            </tr>
          </thead>
          {data.map(dt=><tbody  key={dt.id}>
              <tr>
              <td>{dt.firstName} {dt.lastName}</td>
              <td>{dt.email}</td>
              <td>{dt.gender}</td>
              <td>{dt.type}</td>
              <td>
                <button 
                  type="button" 
                  className='btn btn-success py-0 mr-sm-2' 
                  // style={{width:'35%'}}
                  onClick={()=>{this.handleUpdate('/updateuser',dt)}}
                  >UPDATE</button>
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
const mapStateToProps = ({allUsers:{loading, data, message, userErrors}}) => {
  console.log(data);
    return {
        loading,
        message,
        data,
        userErrors,
    }
  }
export default connect(mapStateToProps,{allUsers,getUser})(AllUsers);