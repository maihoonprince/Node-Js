const http = require("http");
// By the help of http module we can make a server.

const mySever =  http.createServer((req, res) => {
    // console.log("New Request Rec...");
    console.log(req);   // it will Print all client data with ip address.
    res.end("Hello From Server Again");
});

mySever.listen(8000, () => console.log("Server Started"));




// Creating a small Web Server :-

const http = require("http");
const fs = require("fs");

const mySever = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile('log.txt', log,  (err, data) => {  // You must be very carefull while choosing blocking and non-blocking operation.
        switch(req.url){                         // Multi-Route
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
