import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ClientNavbar from '../navbar/client-navbar';
import productActions from '../../actions/product';
import { Card, Col, Container, Row } from 'react-bootstrap';

const {
  allProducts,
  deleteProduct,
  searchAny
} = productActions;
class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      search:null,
    };
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchAny } = this.props;
    console.log()
      searchAny(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { allProducts } = this.props;
      allProducts();
  };
  componentWillReceiveProps(nextProps) {
    const alertMessage =
      (nextProps.productErrors && toast.error(nextProps.productErrors));

    return !nextProps.loading && alertMessage;
  }
  componentDidMount() {
    const { allProducts} = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    allProducts();
  }
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    return (
      <div style={{ width: '100%' }}>
        {this.state.user ? (<ClientNavbar />):null}
        <Container style={{padding:'0px 10%'}}>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <div className='table-responsive-md' style={{ marginTop: '5.8%' }}>
            <nav
              className='navbar navbar-light'
              style={{ width: '100%', marginLeft: '0%' }}
            >
              <form className="form-inline" onSubmit={this.handleSubmit}>
            <input 
              className="form-control py-2 mr-sm-2"
              name='search'
              placeholder='Search'
              onChange={this.handleChange}
              type="search"/>
            <button className="btn btn-outline-success my-2 my-sm-0 mr-sm-2" type="submit">Search</button>
            <button 
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.handleAll}
              type="button">ALL</button>
          </form>
            </nav>
              {!loading && data ? (
                data.map((dt) => (
                  <Card style={{margin:'20px',height:'22vh'}}>
                      <Container style={{height:'100%'}}>
                        <Row style={{height:'100%'}}>
                          <Col lg={8} style={{padding:'2%'}}>
                          <div className='card-title'>
                            <h5>{dt.name} <strong> {dt.price}</strong></h5>
                          </div>
                          <div
                            className='card-text'
                            style={{ marginBottom: '2%' }}
                          >
                            {dt.description}<br/>
                            Category: {dt.Category.name}<br/>
                            Market: {dt.Market.name}<br/>
                          </div>
                          </Col>
                          <Col lg={4} style={{padding:'0px',height:'100%',}}>
                            <img alt='' src={dt.image} style={{height:'100%', width:'100%', borderTopRightRadius:'.25rem', borderBottomRightRadius:'.25rem'}} />
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                ))
              ) : (
                null
              )}
            </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = ({allProducts:{loading, data, message, productErrors}}) => {
  return {
    loading,
    message,
    data,
    productErrors,
  };
};
export default connect(mapStateToProps, {
  allProducts,
  deleteProduct,
  searchAny
})(AllProducts);
