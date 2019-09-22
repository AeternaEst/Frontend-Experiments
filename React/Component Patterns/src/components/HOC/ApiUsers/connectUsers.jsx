import React, { useState } from 'react';
import UserApi from './UserApi';

const connectUsers = (timeout, filter) => {

    return (Component) => {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    users: []
                }
            }

            componentDidMount() {
                const api = new UserApi();
                api.fetchUsers(timeout).then(users => {
                    const filteredUsers = filter ? users.filter(filter) : users;
                    this.setState({
                        users: filteredUsers
                    });
                })
            }

            render() {
                return (<Component users={this.state.users} />);
            }
        }
    } 
}

export default connectUsers;