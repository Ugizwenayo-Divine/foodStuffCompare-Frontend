import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import DropDown from './drop-down';
import { logout } from '../../actions/user';
import './admin-navbar.css';

class ClientNavbar extends Component {

  constructor(){
    super();
    this.state={
      clicked:false,
      details:[],
      action:'',
      leftLength:'',
    }
  }
  handleClick = (details=[],action=null) => {
    this.setState({
      clicked: !this.state.clicked,
      details: details,
      action:action,      
      leftLength:(action==='display'?13:8)
    });
  }
  handleHover = (details=[], actions=null) => {
    this.setState({
      clicked: true,
      details:details,
      action:actions,      
      leftLength:(actions==='display'?13:8)
    });
  }
  handleUnHover = () => {
    this.setState({
      clicked: false,
    });
  }
  handleLogout = () =>{
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.logout(token);
  }
  
  render(){
    const visibility = this.state.clicked?'visible':'hidden';
      return (
        <div 
          className='navbar navbar-expand-xl navbar-light client-nav' 
          style={{
            width:'100%',
            position:'relative',
            marginLeft:'0%',}}>
          <span className="nav-item active">
            <a className="nav-link" href="/">HOME</a>
          </span>
            <span 
              onClick={()=>{this.handleClick(['market','product','category'],'add')}} 
              onMouseOver={()=>{this.handleHover(['market','product','category'],'add')}} 
              onMouseOut= {this.handleUnHover} >
              <a className="nav-link" href="#">ADD</a>
            </span>
          <span 
          className="nav-item"
          onClick={()=>{this.handleClick(['market','product','category','user','order'],'display')}} 
          onMouseOver={()=>{this.handleHover(['market','product','category','user','order'],'display')}} 
          onMouseOut= {this.handleUnHover} >
            <a className="nav-link" href="/displayclientorders">DISPLAY</a>
          </span>
            <DropDown 
              visibility={visibility} 
              details={this.state.details}
              hover={()=>{this.handleHover(this.state.details,this.state.action)}}
              unHover={this.handleUnHover}
              coordinates={this.state.leftLength}
              action={this.state.action}
            />
          <span 
            className='nav-item ml-auto log' 
            onClick={this.handleLogout}
            style={{cursor:'pointer'}}
          >LOGOUT</span>
        </div>
      )
  }
}
export default connect(null,{
  logout
})(withRouter(ClientNavbar));