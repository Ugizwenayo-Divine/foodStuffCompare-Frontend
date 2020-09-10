import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import AdminNavbar from '../navbar/admin-navbar';
import ClientNavbar from '../navbar/client-navbar';
import productActions from '../../actions/product';
import { Card, Col, Container, Row } from 'react-bootstrap';

const {
  allProducts,
  deleteProduct,
} = productActions;
class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  handleDelete(id) {
    const { deleteProduct } = this.props;
    deleteProduct(id);
  }
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa', data);
    const token = localStorage.getItem('token');
    if (token === undefined || token === ' ' || token === null) {
      return alert('not logged in');
    } else {
      this.props.history.push({
        pathname: pathToMyComponent,
        state: { product: data },
      });
    }
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
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    return (
      <div style={{ width: '100%' }}>
        {this.state.user ? (
          this.state.user.type !== 'admin' ? (
            <ClientNavbar />
          ) : <AdminNavbar />
        ) : null}
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
              <h4 style={{ color: '#8f8d8d', fontFamily: 'Montserrat' }}>
                All Products <i className='fas fa-newspaper'></i>
              </h4>
            </nav>
              {!loading && data ? (
                data.map((dt) => (
                  <Card style={{margin:'20px',height:'28vh'}}>
                      <Container style={{height:'100%'}}>
                        <Row style={{height:'100%'}}>
                          <Col lg={8} style={{padding:'1%'}}>
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
                          <div style={{ marginBottom:'0'}}>
                              <button
                                className='btn btn-outline-success my-2 my-sm-0 mr-sm-2'
                                onClick={() => {
                                  this.handleUpdate('/updateproduct', dt);
                                }}
                                type='button'
                              >
                                UPDATE
                              </button>
                              <button
                                className='btn btn-outline-danger my-2 my-sm-0'
                                type='button'
                                onClick={() => {
                                  this.handleDelete(dt.id);
                                }}
                              >
                                DELETE
                              </button>
                            </div>
                          </Col>
                          <Col lg={4} style={{padding:'0px',height:'100%',}}>
                            <img alt='' src={dt.image} style={{height:'100%', width:'100%', borderTopRightRadius:'.25rem', borderBottomRightRadius:'.25rem'}} />
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  // <div
                  //   className='card'
                  //   key={dt.id}
                  //   style={{ width: '100%', marginBottom: '1%' }}
                  // >
                  //   <div className='form-row'>
                  //     <div
                  //       className='card-body col-md-8'
                  //       style={{ marginLeft: '5%' }}
                  //     >
                  //       <div className='card-title'>
                  //         <h5>{dt.name} <strong> {dt.price}</strong></h5>
                  //       </div>
                  //       <div
                  //         className='card-text'
                  //         style={{ marginBottom: '2%' }}
                  //       >
                  //         {dt.description}<br/>
                  //         Category: {dt.Category.name}<br/>
                  //         Market: {dt.Market.name}<br/>
                  //         {/* Availabity:{dt.Category.name} */}
                  //       </div>
                  //       {this.state.user ? (
                  //         this.state.user.type === 'admin' ? (
                  //           <div style={{ marginBottom:'0'}}>
                  //             <button
                  //               className='btn btn-outline-success my-2 my-sm-0 mr-sm-2'
                  //               onClick={() => {
                  //                 this.handleUpdate('/updateproduct', dt);
                  //               }}
                  //               type='button'
                  //             >
                  //               UPDATE
                  //             </button>
                  //             <button
                  //               className='btn btn-outline-danger my-2 my-sm-0'
                  //               type='button'
                  //               onClick={() => {
                  //                 this.handleDelete(dt.id);
                  //               }}
                  //             >
                  //               DELETE
                  //             </button>
                  //           </div>
                  //         ) : null
                  //       ) : null}
                  //     </div>
                  //     <div className='col-md-3'>
                  //     <img alt='' src={dt.image} style={{height:'180px', width:'250px', marginTop:'8%', marginBottom:'auto'}} />
                  //       {/* <Image
                  //         alt=''
                  //         width={250}
                  //         height={200}
                  //         style={style}
                  //         src={dt.image}
                  //       /> */}
                  //     </div>
                  //   </div>
                  // </div>
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
  deleteProduct
})(AllProducts);
