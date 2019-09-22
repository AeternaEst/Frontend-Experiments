
const users = [{name: "Nicholas", age: 30}, {name: "Andreja", age: 28}, {name: "Arnold", age: 70}]

class UserApi {

    fetchUsers(timeout) {
        return new Promise((resolve, reject)  => {
            setTimeout(() => {
                console.log("resolving users");
                resolve(users);
            }, timeout)
        });
    }
}

export default UserApi;