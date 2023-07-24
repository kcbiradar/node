const url = require('url');

const http = require("http");

const fs = require("fs");

http.createServer((req , res) => {
    // request
    // index

    const path = req.url;

    if(path == "/about") {
        console.log("This is about page");
    } else if(path == "/") {
        console.log("home page");
        res.writeHead(200 , {
            'content-typ' : 'text/html'
        });

        const fileContent=fs.readFileSync("./templates/home.html");

        res.write(fileContent);

        res.end();
    } else {
        console.log("services");
    }



    // about
    // services
}).listen(8082);