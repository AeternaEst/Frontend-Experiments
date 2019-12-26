import { logProps } from "../utils";

/**
 * Partial makes all properties on the type optional
 * Required makes all properties on the type required
 */

interface User {
  id: number;
  name?: string;
  lastLogin?: Date;
}

class UserRepository {
  private users: User[] = [];

  addUser(user: Required<User>): void {
    this.users.push(user);
  }

  updateUser(user: Partial<User>): User | undefined {
    if("id" in user) {
      const locatedUser = this.users.find(u => u.id === user.id);

      if(locatedUser) {
        locatedUser.name = user.name || locatedUser.name;
        locatedUser.lastLogin = user.lastLogin || locatedUser.lastLogin;
      }
    }

    return undefined;
  }

  logRepository(): void {
    this.users.forEach(user => logProps(user));
  }
}

function runPartial(): void {
  const repository = new UserRepository();
  repository.addUser({id: 1, name: "Dean Winchester", lastLogin: new Date()});
  repository.addUser({id: 2, name: "Sam Winchester", lastLogin: new Date()});
  repository.addUser({id: 3, name: "Castiel", lastLogin: new Date()});

  repository.updateUser({ id: 1, name: "Dean Winchester Modified"});
  repository.updateUser({ id: 2});
  repository.updateUser({ id: 3, lastLogin: new Date(2018, 1, 1)});

  repository.logRepository();
}

export default runPartial;