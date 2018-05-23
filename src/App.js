import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from '/Users/andypuertas/Desktop/webdev/devmountain/wpr37/nahdb-project/src/components/Header.js';
import Sidenav from '/Users/andypuertas/Desktop/webdev/devmountain/wpr37/nahdb-project/src/components/Sidenav.js';
import Login from '/Users/andypuertas/Desktop/webdev/devmountain/wpr37/nahdb-project/src/components/Login.js';
//import Button from '/Users/andypuertas/Desktop/webdev/devmountain/wpr37/nahdb-project/src/components/Button.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Users',
      baseUrl: '',
      username: '',
      password: '',
      users: []
    };

   
    this.handleChange = this.handleChange.bind( this )
    this.addUser = this.addUser.bind( this )
    this.deleteUser = this.deleteUser.bind( this )
    this.editUser = this.editUser.bind( this )
  }


  componentDidMount() {
    axios.get(`/api/users`)
    .then((res) => {
      this.setState({
        users: res.data
      })
    })
    
  }

  addUser(){
    axios.post(`/api/users`, {username: this.state.username, password: this.state.password})
    .then((res) => {
      this.setState({
        users: res.data
      })
    })
  }


  deleteUser(id){
    axios.delete(`/api/users/${id}`)
    .then((res) => {
      this.setState({
        users:res.data
      })
    })
    
  }

  editUser(){

  }



  handleChange( event ) {
    this.setState({ [event.target.name]: event.target.value });
  }



  render() {
    const users = this.state.users.map( (e) => {
      console.log(e.id);
      return(
        <div>
          <h1>{e.username}</h1>
          <h1>{e.password}</h1>
          {/* <Button name='Edit'/> */}
         <button onClick={() => this.deleteUser(e.id)}>
          Delete
         </button>
        </div>
      )
    })
    console.log(this.state)
    return (
      <div className="App">   
         <Header title='User Generator' />
         <Login handleChange={this.handleChange}/> 
         
         <button onClick={this.addUser}>
          Add
         </button>
      
         
            
     
          <Sidenav />    
          { users }    
          

      </div>
      
    
    );
  }
}

export default App;
