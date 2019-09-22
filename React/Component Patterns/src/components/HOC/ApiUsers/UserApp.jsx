import React from 'react';
import connectUsers from './connectUsers';
import UserConsumer from './UserConsumer';

const UserApp = props => {
    const Connected = connectUsers(2000, user => user.age <= 30)(UserConsumer);

    return (
        <div className="user-app">
            {
                <Connected />
            }
        </div>
    )
}

export default UserApp;