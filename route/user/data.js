import sqlite3 from 'sqlite3';
const SQlite3 = sqlite3.verbose();

function connectBD() {
    return new SQlite3.Database('./route/user/data.db', 
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        err ? console.error(err.message) : 
        console.log('Подключение к SQLite базе данных выполнено успешно.')});
    };

function getData(quire, db) {

    db.serialize(function() { 
            // db.run(`CREATE TABLE "USER" IF NOT EXISTS (
            // "ID"	INTEGER NOT NULL,
            // "NAME"	TEXT NOT NULL,
            // PRIMARY KEY("ID" AUTOINCREMENT));`, (err) => { if (err) return; });

            db.each(quire, (err, row) => {
                if (err) {
                    console.log(err.message)
                }
                row;
             });
           });
}

function closeDB(db) {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Соединение с базой данных закрыто.');
    })
}


getData("SELECT * FROM USER", connectBD());
closeDB(connectBD());
// db.serialize(() => { 
    // db.run(`CREATE TABLE "USER" IF NOT EXISTS (
	// "ID"	INTEGER NOT NULL,
	// "NAME"	TEXT NOT NULL,
	// PRIMARY KEY("ID" AUTOINCREMENT));`, (err) => { if (err) return; });
    
    // db.each("SELECT * FROM USER", (err, row) => {
    //     if (err) {
    //         console.log(err.message)
    //     }
    //     console.log(`пользователя с ID ${row.ID} зовуд ${row.NAME}`); 
    //     dataUser=row; });



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