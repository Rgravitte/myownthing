import React, {Component} from 'react';
import "../App.css";
// import Axios from 'axios';
// import {Link} from 'react-router-dom';



class User extends Component{

  state = {
    userInfo: null,
  }

//   componentWillMount(){
//     this.fetchUserInfo()
//  }


//  fetchUserInfo = () =>{
//      Axios.get('http://localhost:5000/api/')
//      .then((responseFromApi)=>{
//          this.setState({userInfo: responseFromApi})
         // .reverse is just so we see the newest tasks at the top of the page
         // once we get all the tasks, we set the state so that the state will have all the tasks in there
    //  })
    //  .catch((err)=>{
    //    console.log(err);
    //  })
 
  render(){
    return(
      <div>
        <h1>the user page</h1>
      </div>
    )
  }
}


export default User;