import { users, deleteUser, findUser } from "./data.js";

export default function DELETE(req, res) {
    let data = "";
    req.on("data", dataReq => {
        data += dataReq;
    });

    req.on("end", dataReq => {

        let name = JSON.parse(data).user;

        if (findUser(name)) {
            deleteUser(name);
            res.write("Пользователь удален!!!\n")
        } else { 
            res.write("Такого пользователя не существует!!\n"); 
        }

        res.end();
    });
};