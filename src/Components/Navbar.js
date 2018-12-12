import React, {Component} from 'react';
import "../App.css";
import {Route, Switch, Link} from 'react-router-dom';

class Navbar extends Component{

  showCorrectNavLinks = ()=>{

    if(!this.props.loggedIn){

      return (
        <div>
        <div className="navbar-div">
        <nav className="nav-link-container">
        <p>Logo</p>
        <Link to="/">Home Page</Link> 
        <Link to="/user/login">Log in </Link> 
        <Link to="/user/signup">Sign Up </Link>
       </nav>
       </div>
       </div>
      )
        
    } else {
      return (
        <div>
        <div className="navbar-div">
        <nav className="nav-link-container">
        <p>Logo</p>
        <Link to="/">Home Page</Link> 
        <Link to="/itemList">View item list</Link>
        <Link to="/user/login" onClick={this.props.logUserOut}> Logout </Link>
        </nav>
       </div>
       </div>
        )

    }

    /*
    return(
    <div className="navbar-div">
    <nav className="nav-link-container">
      <p>Logo</p>
    
      <Link to="/">Home Page</Link>
      <Link to="/user/signup"
      >Sign Up</Link>
      { !this.props.loggedIn ? 
      <Link to="/user/login">Log in</Link> 
      : <Link to="/user/login" onClick={this.props.logUserOut}> Logout </Link>
    } 
    <Link to="/itemList">View item list</Link>
      
 
  </nav>
</div>)*/
  }

  render(){
    return(

        <div>
          {this.showCorrectNavLinks()}
        </div>

 
    )
  }
}

export default Navbar;