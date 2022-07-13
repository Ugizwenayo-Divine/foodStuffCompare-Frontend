import React from 'react';
import Skeleton from "react-loading-skeleton";
import { Card, Col, Container, Row } from 'react-bootstrap';

const skeleton = () =>{
  const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
        <Card style={{margin:'20px',height:'28vh'}}>
                        <Container style={{height:'100%'}}>
                          <Row style={{height:'100%'}}>
                            <Col lg={8} style={{padding:'2%'}}>
                            <div className='card-title'>
                  <h5><Skeleton  height={25} width={200}/><br/></h5>
                            </div>
                            <div
                              className='card-text'
                              style={{ marginBottom: '2%' }}
                            >
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/>
                            </div>
                            <div style={{ marginBottom:'0'}}>
                            <Skeleton  height={35} width={90}/>
                              </div>
                            </Col>
                            <Col lg={4} style={{padding:'0px'}}>
                                <Skeleton  height={175} width={272}/>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
        <Card style={{margin:'20px',height:'28vh'}}>
                        <Container style={{height:'100%'}}>
                          <Row style={{height:'100%'}}>
                            <Col lg={8} style={{padding:'2%'}}>
                            <div className='card-title'>
                  <h5><Skeleton  height={25} width={200}/><br/></h5>
                            </div>
                            <div
                              className='card-text'
                              style={{ marginBottom: '2%' }}
                            >
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/>
                            </div>
                            <div style={{ marginBottom:'0'}}>
                            <Skeleton  height={35} width={90}/>
                              </div>
                            </Col>
                            <Col lg={4} style={{padding:'0px'}}>
                                <Skeleton  height={175} width={272}/>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
        <Card style={{margin:'20px',height:'28vh'}}>
                        <Container style={{height:'100%'}}>
                          <Row style={{height:'100%'}}>
                            <Col lg={8} style={{padding:'2%'}}>
                            <div className='card-title'>
                  <h5><Skeleton  height={25} width={200}/><br/></h5>
                            </div>
                            <div
                              className='card-text'
                              style={{ marginBottom: '2%' }}
                            >
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/>
                            </div>
                            <div style={{ marginBottom:'0'}}>
                            <Skeleton  height={35} width={90}/>
                              </div>
                            </Col>
                            <Col lg={4} style={{padding:'0px'}}>
                                <Skeleton  height={175} width={272}/>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
        <Card style={{margin:'20px',height:'28vh'}}>
                        <Container style={{height:'100%'}}>
                          <Row style={{height:'100%'}}>
                            <Col lg={8} style={{padding:'2%'}}>
                            <div className='card-title'>
                  <h5><Skeleton  height={25} width={200}/><br/></h5>
                            </div>
                            <div
                              className='card-text'
                              style={{ marginBottom: '2%' }}
                            >
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/>
                            </div>
                            <div style={{ marginBottom:'0'}}>
                            <Skeleton  height={35} width={90}/>
                              </div>
                            </Col>
                            <Col lg={4} style={{padding:'0px'}}>
                                <Skeleton  height={175} width={272}/>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
        <Card style={{margin:'20px',height:'28vh'}}>
                        <Container style={{height:'100%'}}>
                          <Row style={{height:'100%'}}>
                            <Col lg={8} style={{padding:'2%'}}>
                            <div className='card-title'>
                  <h5><Skeleton  height={25} width={200}/><br/></h5>
                            </div>
                            <div
                              className='card-text'
                              style={{ marginBottom: '2%' }}
                            >
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/>
                            </div>
                            <div style={{ marginBottom:'0'}}>
                            <Skeleton  height={35} width={90}/>
                              </div>
                            </Col>
                            <Col lg={4} style={{padding:'0px'}}>
                                <Skeleton  height={175} width={272}/>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
        <Card style={{margin:'20px',height:'28vh'}}>
                        <Container style={{height:'100%'}}>
                          <Row style={{height:'100%'}}>
                            <Col lg={8} style={{padding:'2%'}}>
                            <div className='card-title'>
                  <h5><Skeleton  height={25} width={200}/><br/></h5>
                            </div>
                            <div
                              className='card-text'
                              style={{ marginBottom: '2%' }}
                            >
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/><br/>
                              <Skeleton  height={20} width={150}/>
                            </div>
                            <div style={{ marginBottom:'0'}}>
                            <Skeleton  height={35} width={90}/>
                              </div>
                            </Col>
                            <Col lg={4} style={{padding:'0px'}}>
                                <Skeleton  height={175} width={272}/>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
                      </div>
      
    )
}
export default skeleton;