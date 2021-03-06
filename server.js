// express is the server that forms part of the nodejs program
var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4443);
app.get('/', function (req, res) {
// run some server-side code
console.log('the server has received a request');
res.send('Hello World');
});


app.get('/map', function (req, res) {
// run some server-side code
console.log('test.html requested');
// note that __dirname gives the path to the server.js file
res.sendFile(__dirname + '/test.html');
});

app.get('/map2', function (req, res) {
// run some server-side code
var map2 = req.params.fileName;
console.log(map2 + ' requested');
// note that __dirname gives the path to the server.js file
res.sendFile(__dirname + '/test2.html');
});


app.get('/map3', function (req, res) {
// run some server-side code
var map3 = req.params.fileName;
console.log(map3 + ' requested');
// note that __dirname gives the path to the server.js file
res.sendFile(__dirname + '/test3.html');
});

app.use(express.static(__dirname));