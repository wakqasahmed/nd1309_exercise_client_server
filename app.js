
// Http library
const http = require('http');

//Step 1. Import crypto-js/sha256
const CryptoJS = require('crypto-js');

// Http port
const port = 8080;

//Mock Data
var blocks = [];
let block_1 = {"height":"0","body":"Udacity Blockchain Developer", "time": 1538509789};
let block_2 = {"height":"1","body":"Udacity Blockchain Developer Rock!", "time": 1538509789};
blocks.push(block_1);
blocks.push(block_2);

//Step 2. Configure web service
/**
 * Take the block_2 data from the array "blocks" and generate the hash to be written into the response.
 */

const app = http.createServer(function (request, response){ 
    // calculate a SHA256 hash of the content
    var hash = CryptoJS.SHA256(JSON.stringify(blocks[1])).toString();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(hash);
    response.end();
})

// Notify console
console.log("Web Server started on port 8080\nhttp://localhost:"+port);
// Start server with http port
app.listen(port);