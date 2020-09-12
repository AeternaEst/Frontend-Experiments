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
    }
]

export default class LoginService {

    public login(userName: string, password: string): Promise<AppUser> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = userDatabase.find(user => user.userName === userName && user.password === password);
                if(user) {
                    resolve(user);
                }
                reject("incorrect username or password");
            }, 2000);
        });
    }
}