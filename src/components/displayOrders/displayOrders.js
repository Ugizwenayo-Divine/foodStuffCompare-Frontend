import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import DisplayProductSkeleton from '../clientOrders/clientOrdersSkeleton';
import AdminNavbar from '../navbar/admin-navbar';
import {
  getAllOrders,
  getOrder,
  deliverOrder,
} from '../../actions/order/index';

class AllOrders extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      search: null,
    };
  }
  componentDidMount() {
    const { allOrders } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    allOrders();
  }
  componentWillReceiveProps(nextProps) {
    const { deliverLoading, deliverMessage } = this.props;
    if (!deliverLoading && deliverMessage) {
      window.location.reload();
    }
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchOrder } = this.props;
    searchOrder(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { allOrders } = this.props;
    allOrders();
  };
  handleDeliver(id) {
    const { deliverOrder } = this.props;
    deliverOrder(id);
  }
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    return (
      <div style={{ width: '100%' }}>
      <AdminNavbar />
        <div className='container'>
          <div className='table-responsive-md' style={{ marginTop: '5.8%' }}>
            <nav
              className='navbar navbar-light'
              style={{ width: '100%', marginLeft: '0%' }}
            >
              <h4
                className='navbar-brand'
                style={{
                  fontSize: '24px',
                  color: '#8f8d8d',
                  fontFamily: 'Montserrat',
                }}
              >
                Food Stuff Orders <i className='fa fa-shopping-cart'></i>
              </h4>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                <div className='input-group mr-sm-2'>
                  <select
                    className='custom-select'
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Choose...</option>
                    <option value='pending'>pending</option>
                    <option value='payed'>payed</option>
                    <option value='canceled'>canceled</option>
                    <option value='delivered'>delivered</option>
                  </select>
                  <div className='input-group-append'>
                    <button className='btn btn-outline-success' type='submit'>
                      Search
                    </button>
                  </div>
                </div>
                <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  onClick={this.handleAll}
                  type='button'
                >
                  ALL
                </button>
              </form>
            </nav>
            {!loading && data ? (
              <table
                style={{ width: '100%' }}
                className='table table-bordered table-hover table-sm'
              >
                <thead className='thead-dark'>
                  <tr>
                    <th>Nº</th>
                    <th>Product</th>
                    <th>Units</th>
                    <th>Ordered By</th>
                    <th>Total price</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {data.map((dt) => {
                // const date= new Date(dt.due_time);
                  return (
                  <tbody key={dt.id}>
                    <tr>
                      <td>{dt.id}</td>
                      <td>{dt.product}</td>
                      <td>{dt.ordered_quantity}</td>
                      <td>{dt.User?dt.User.email:dt.orderedBy}</td>
                      <td>
                        {dt.amount}
                        {dt.currency}
                      </td>
                      <td>{dt.status}</td>
                      {/* <td>{dt.status==='pending'?`${date.getFullYear()}-${date.getMonth()}-${date.getDate()},  ${date.getHours()}:${date.getMinutes()}`:'Never'}</td> */}
                      <td>
                        <button
                          type='button'
                          className='btn btn-success py-0'
                          onClick={() => {
                            this.handleDeliver(dt.id);
                          }}
                          disabled={
                            dt.status === 'canceled' ||
                            dt.status === 'delivered'
                              ? true
                              : false
                          }
                        >
                          DELIVER
                        </button>
                      </td>
                    </tr>
                  </tbody>
                )})}
              </table>
            ) : (
              <DisplayProductSkeleton />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.payment.data, 'statesss');
  return {
    loading: state.allOrders.loading,
    orderErrors: state.allOrders.orderErrors,
    data: state.allOrders.data,
    message: state.allOrders.message,
    deliverLoading: state.deliverOrder.loading,
    deliverMessage: state.deliverOrder.message,
  };
};
export default connect(mapStateToProps, {
  allOrders: getAllOrders,
  searchOrder: getOrder,
  deliverOrder: deliverOrder,
})(AllOrders);
