let users = ["test", "test2"]
let countUsers = 0;

function deleteUser(name) {
    for (let i=0; i < users.length; i++) {
        if (users[i] === name) {
            users.splice(i, 1);
            break;
        }
    }
}

function findUser(name){
    let result = false;

    for (let key in users){
        result = (users[key] === name) ? true : false;
    }
    return result
}

function updateUser(oldName, newName){
    for (let key in users) {
        console.log(users[key]);
        if (users[key] === oldName) {
            users[key] = newName;
        }
    }
};

export { users, countUsers, deleteUser, findUser, updateUser}