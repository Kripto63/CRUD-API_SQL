import GET from "./GET.js";
import POST from "./POST.js";
import DELETE from "./DELETE.js";
import PUT from "./PUT.js";

export default function requst(req, res) {

    if (req.method === 'GET') {
        GET(req, res);

    } else if (req.method === 'POST') {
        POST(req, res);

    } else if (req.method === 'PUT') {
        PUT(req, res);
        
    } else if (req.method === 'DELETE') {
        DELETE(req, res);
        
    } else {
        res.statusCode = 404;
        res.end("Page not found!")
    }
};