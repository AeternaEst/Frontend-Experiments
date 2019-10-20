
export interface User {
  name: string;
  age: number;
}

const users: User[] = [{ name: 'Nicholas', age: 30 }, { name: 'Andreja', age: 28 }, { name: 'Arnold', age: 70 }];

class UserApi {
  fetchUsers = (timeout: number) => new Promise<User[]>(resolve => {
    setTimeout(() => {
      console.log('resolving users');
      resolve(users);
    }, timeout);
  });
}

export default UserApi;