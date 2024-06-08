import method from "./user/method.js"

export default function route(req, res) {
    
    if (req.url.match(/^\/user*/)) {
        method(req, res);
    } else {
        res.statusCode = 404;
        res.end("Page not found!")
        console.log(req.url)
    }
};