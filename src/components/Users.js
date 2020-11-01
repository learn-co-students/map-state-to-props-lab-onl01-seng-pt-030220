import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    const returnUsers = () => this.props.users.map((user, i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {returnUsers()}
          <br/>
          Total Users: {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users, numberOfUsers: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
