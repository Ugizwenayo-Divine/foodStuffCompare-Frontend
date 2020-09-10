import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import LandingFooter from './landingFooter/landingFooter';
import MainNavBar from '../navbar/main-navbar';
import './homePage.css';

class Landing extends Component {
  render (){
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token) {
      if(user.type !== 'client'){
        return <Redirect to='/addproduct'/>        
      }
      else{
        return <Redirect to='/displayclient'/>        
      }
    }
    return(
      <div className='landing'>
        <div className="landing-body">
        <div className="header">
          <MainNavBar/>
          <div className='getStarted'>
            <button
              type="button" 
              className="btn btn-success btn-lg"
              style={{
              width:'15%',
              // opacity:'0.7',
              backgroundColor:'#5cb85c',
            }}><Link to='/login'>Get Started</Link></button>
          </div>
        </div>

        </div>
        <div className='footer'>
          <LandingFooter/>
        </div>
      </div>
    )
  }
}
export default Landing;