import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import DisplayProductSkeleton from './display-product-skeleton';
import AdminNavbar from '../navbar/admin-navbar';
import categoryReducer from '../../actions/category';
import generatePDF from '../../helpers/helperFunctions';

const {
  displayCategories,
  deleteCategory,
  getCategory,
} = categoryReducer;
class AllUsers extends Component{
  constructor(){
    super();
    this.state={
      user:{},
      search:null,
    }
  }
  componentDidMount(){
      const {displayCategories} = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
    displayCategories();
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { getCategory } = this.props;
      getCategory(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { displayCategories } = this.props;
      displayCategories();
  };
  handleDelete(id){
    const {deleteCategory} = this.props;
    deleteCategory(id);
  }
  handleReport(event,data) {
    event.preventDefault();
    generatePDF('category',data);
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.categoryErrors && toast.error(nextProps.categoryErrors));

  return !nextProps.loading && alertMessage;    
  }
  render (){
    const {loading, categories }=this.props;
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
          <h4 className="navbar-brand" style={{fontSize:'24px',color:'#8f8d8d',fontFamily:'Montserrat'}}>All Categories</h4>
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
              onClick={(event)=>{this.handleReport(event,categories)}}
              type="button">REPORT</button>
          </form>
        </nav>
          {((!loading && categories) ? <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
          <thead className='thead-dark'>
            <tr>
              <th>Category Id</th>
            <th>Category</th>
            <th>Action</th>
            </tr>
          </thead>
          {categories.map(dt=><tbody  key={dt.id}>
              <tr>
                <td>{dt.id}</td>
              <td>{dt.name}</td>
              <td>
                <button 
                  type="button" 
                  className='btn btn-danger py-0 mr-sm-2' 
                  // style={{width:'35%'}}
                  onClick={()=>{this.handleDelete(dt.id)}}
                  >DELETE</button>
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
const mapStateToProps = ({categories:{loading, categories, message, categoryErrors}}) => {
    return {
        loading,
        message,
        categories,
        categoryErrors,
    }
  }
export default connect(mapStateToProps,{displayCategories,deleteCategory,getCategory})(AllUsers);