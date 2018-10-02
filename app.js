
// Http library
const http = require('http');
const SHA256 = require('crypto-js/sha256');
// Http port
const port = 8080;
// Configure web service
const app = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "application/json"});
    let block = {"height":"0","body":"Udacity Blockchain Developer", "time": new Date().getTime().toString().slice(0,-3)};
    // Add your code here
    response.write(SHA256(JSON.stringify(block)).toString());
    response.end();
});
// Notify console
console.log("Web Server started on port 3000\nhttp://localhost:"+port);
// Start server with http port
app.listen(port);