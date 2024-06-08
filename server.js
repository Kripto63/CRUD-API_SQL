"use strict";

import route from "./route/route.js";
import http from "http"

// Константа, которая определяет порт сервера
const PORT = 3000;

const server = http.createServer(
    function(req, res) {
        route(req, res);
    }
);

server.listen(PORT, 
    function() {
        console.log(`Server run on http://localhost:${PORT}`)
    }
);