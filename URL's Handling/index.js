const http = require("http");
const fs = require("fs");

const mySever = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    const myUrl = url.parse(req.url);
    console.log(myUrl);

    fs.appendFile('log.txt', log,  (err, data) => {
        switch(req.url){                        
            case'/': res.end("Homepage");
            break;
            case'/about':res.end("I am Prince");
            break;
            default:
                res.end("404 Not Found")
        }
    });
});

mySever.listen(8000, () => console.log("Server Started"));
