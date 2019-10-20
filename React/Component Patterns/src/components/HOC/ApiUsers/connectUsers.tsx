import React from 'react';
import UserApi, { User } from './UserApi';

interface ConnectedUserState {
  users: User[];
}

interface ConnectedUserProps {
  users: User[];
}

const connectUsers = (timeout: number, filter: (users: User) => boolean) => (Component: React.ComponentType<ConnectedUserProps>) => class extends React.Component<{}, ConnectedUserState> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const api = new UserApi();
    api.fetchUsers(timeout).then(users => {
      const filteredUsers = filter ? users.filter(filter) : users;
      this.setState({
        users: filteredUsers,
      });
    });
  }

  render() {
    return (<Component users={this.state.users} />);
  }
};

export default connectUsers;