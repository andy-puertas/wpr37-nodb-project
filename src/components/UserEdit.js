import React, { Component } from 'react'

export default class UserEdit extends Component {
    constructor(props){
        super(props);

        this.state = {
            editToggle: false,
            editUsername: '',
            editPassword: ''
        }
    }

     componentDidMount() {
        this.setState({
            editUsername: this.props.username, 
            editPassword: this.props.password
        })
    }

    editClick(users) {
        if(this.state.editToggle) {
            this.props.editUser(this.state.editUsername, this.state.editPassword, this.props.id)
        }
        this.setState({editToggle: !this.state.editToggle})
    }

    render(){
        return(
            <div>
                {
                  this.state.editToggle ? 
                  <div>
                  <input value={this.state.editUsername} onChange={(e) => this.setState({editUsername: e.target.value})}/>
                  <input value={this.state.editPassword} onChange={(e) => this.setState({editPassword: e.target.value})}/>
                  </div>
                  :
                
                  <div>
                <h1>{this.props.username}</h1>
                <h1>{this.props.password}</h1>
                </div>
                }
                <button onClick={() => this.editClick()}>{this.state.editToggle 
                ? 
                    'Save' 
                : 
                    'Edit'}
                </button>
           </div>
        )
    }
}
                
            
