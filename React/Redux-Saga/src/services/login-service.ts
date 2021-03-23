/* eslint-disable max-len */
import { AppUser } from "../types/app-user";

const userDatabase: AppUser[] = [
  {
    userName: "Arnold",
    password: "password",
  },
  {
    userName: "Sylvester",
    password: "password",
  },
  {
    userName: "Jean Claud",
    password: "password",
  },
];

export default class LoginService {
  login = (userName: string, password: string): Promise<AppUser> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = userDatabase.find(
          (databaseUser) =>
            databaseUser.userName === userName &&
            databaseUser.password === password
        );
        if (user) {
          resolve(user);
        }
        reject(new Error("incorrect username or password"));
      }, 2000);
    });
}
