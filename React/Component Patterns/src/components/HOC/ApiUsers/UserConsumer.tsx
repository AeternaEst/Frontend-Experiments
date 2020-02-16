import React from "react";
import { User } from "./UserApi";

interface UserConsumerProps {
  users: User[];
}

const UserConsumer = (props: UserConsumerProps) => {
  const { users } = props;

  if (!users || !users.length) {
    return <p>...Loading</p>;
  }

  return (
    <div className="user-consumer">
      <ul className="user-list">
        {users.map(user => (
          <li key={user.name}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserConsumer;
