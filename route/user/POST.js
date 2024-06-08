"use strict";
import {users} from './data.js'

export default function POST(req, res) {

    var f = "";
    var data = ""
    req.on("data", dataReq => {
        data += dataReq;
    });
    
    req.on("end", f = function() {
        users.push(JSON.parse(data).user)
        res.end("Пользователь добавлен!!!\n");
    });
}