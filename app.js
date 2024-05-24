console.log("Hi world!!!");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Preparing...!!!");
});
server.listen(3000);
