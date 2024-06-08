import sqlite3 from 'sqlite3';
const SQlite3 = sqlite3.verbose();

// Подключение к БД
let db = new SQlite3.Database('./route/user/data.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Подключение к SQLite базе данных выполнено успешно.');
});


console.log(db.run('CREATE TABLE USER IF NOT EXISTS ( ID NUMBER , NAME VARCHAR(100));', (err) => {
    if (err) return;
}))

db.run("SELECT name FROM sqlite_master WHERE type='table';");

// Закрытие подключения
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Соединение с базой данных закрыто.');
});


//
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