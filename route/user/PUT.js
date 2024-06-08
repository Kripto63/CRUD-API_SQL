import { users, updateUser} from "./data.js";

export default function PUT(req, res) {
    let data = "";
    req.on("data", dataReq => {
        data += dataReq;
    });

    req.on("end", dataReq => {
        let jsonData = JSON.parse(data);
        let beforeName = jsonData.before.name;
        let afterName = jsonData.after.name;
        updateUser(beforeName, afterName);
        res.end();
    });
};