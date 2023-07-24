const url = require('url');

const http = require("http");

const fs = require("fs");

http.createServer((req , res) => {
    // request
    const path = req.url;

    if(path == "/about") {
        // about

        res.writeHead(200 , {
            'content-type' : 'text/html'
        });

        const fileContent = fs.readFileSync("./templates/about.html");

        res.write(fileContent);

        res.end();

    } else if(path == "/") {

        // index
        res.writeHead(200 , {
            'content-typ' : 'text/html'
        });

        const fileContent=fs.readFileSync("./templates/home.html");

        res.write(fileContent);

        res.end();
    }
}).listen(8082);