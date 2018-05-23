import React, { Component }  from 'react';

class Login extends Component {

    constructor () {
      super();
      this.state = {
        username: '',
        password: ''
      };
   
    }

    
    render () {
      console.log(this.props)
      return (
        <form>
        
          <label>Username:</label>
          <input type="text" name="username" onChange={this.props.handleChange} />
          
          <label>Password:</label>
          <input type="password" name="password" onChange={this.props.handleChange} />
          
        </form>
      );
    }
  }

export default Login;  