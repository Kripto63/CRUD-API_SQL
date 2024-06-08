import { users } from "./data.js"

// console.log(users)

export default function GET(req, res) {
    for (let key in users) {
        console.log(users[key]);
        res.write(users[key]);
        res.write(`\n`);
    }
    res.end();
}