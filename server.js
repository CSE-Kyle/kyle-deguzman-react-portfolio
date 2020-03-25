const express = require('express'); // bring in 'express' server
const port = process.env.PORT || 8080; // declaring port to run on live server 
const app = express(); // starts an instance of express

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
}) // declaring server, giving some configuration options 

app.listen(port); // start the server and listen at whatever port the server's running at

console.log("server started");