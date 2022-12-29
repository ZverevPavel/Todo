import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    const users = [
      {
        'id': 1,
        'user_name': 'admin',
        'first_name': 'Tom',
        'last_name': 'Smith',
        'email': 'www'
      },
      {
        'id': 2,
        'user_name': 'user',
        'first_name': 'Ket',
        'last_name': 'Stoun',
        'email': 'www222'
      },
    ]
    this.setState(
      {
        'users': users
      }
    )
  }

  render () {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App;
