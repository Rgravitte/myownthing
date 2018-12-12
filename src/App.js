import React, { Component } from 'react';

import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import UserService from './Components/Services/UserService';
import User from './Components/User';
import Navbar from './Components/Navbar';
import ItemIndex from './Components/itemIndex';
import itemDetails from './Components/itemDetails';



class App extends Component {
  state = {
    loggedInUser: null,
  }

  service = new UserService();


  componentDidMount(props){
    this.fetchUser();
  }


  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(theActualUserFromDB =>{
        this.setState({
          loggedInUser:  theActualUserFromDB
        }) 

      })
      .catch( err =>{
        console.log('catch getting hit', err)
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  logInTheUser = (userToLogIn) => {
    // console.log('this is before',this.state.loggedInUser)

 

      this.setState({loggedInUser: userToLogIn })
    // console.log('this is after',this.state.loggedInUser)

  }

  showUser = () =>{
    if(this.state.loggedInUser){
      // console.log('you are logged in', this.state.loggedInUser)
      return(
        <h4>Welcome, {this.state.loggedInUser.username}</h4>)
    }else{
          return(
            <div className="applicationInfoDiv">
             
              <div className="paragraphAboutApp">
               
                <h1>Welcome</h1>
                <p className="paragraphAboutAppText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

          )
      
      
    }
  }

  // hideHeader = () =>{
  //   this.setState({
  //     showHeader: false,

  //   })
  // }

  logout = () =>{
    this.service.logout().then(()=>{
      this.setState({loggedInUser: null});
      console.log('you triggered the logout function', this.state.loggedInUser);
    })
  }

  
  
    render() {
     console.log(this);
    return (
     <div className="App">
      <Navbar logUserOut={this.logout} loggedIn={this.state.loggedInUser}/>
      <h3>Inventory Management Assistant</h3>
         
       


        <Switch>
          <Route path="/user/login" render={(props) =>  <Login   {...props} logTheUserIntoAppComponent = {this.logInTheUser} loggedIn={this.state.loggedInUser}/> } />

          <Route path="/user/signup" render = {(props)=>    <Signup {...props} logTheUserIntoAppComponent =   {this.logInTheUser} />  } />


          <Route path="/itemList" render={props => <ItemIndex {...props} currentUser ={this.state.loggedInUser} />} />

          <Route path="/items/details/:id" component={itemDetails} />

          <Route path="/user/:id" component={User} />

        </Switch>
        <div>{this.showUser()}</div>
     
      </div>
    )
  }
}

export default App;
