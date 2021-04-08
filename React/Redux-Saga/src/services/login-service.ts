/* eslint-disable max-len */
import { userDatabase } from "../data/database";
import { AppUser } from "../types/app-user";

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
