import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
         {this.props.users.map(user=>  <li> {user.username}</li>)}
          <p> {this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps=(state)=>(

   {users: state.users}
)
// connect this component to Redux
//export default  connect(state=>({users: state.users}))(Users)

export default  connect(mapStateToProps)(Users)