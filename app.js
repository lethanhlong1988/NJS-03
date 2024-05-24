console.log("Hi world!!!");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Preparing...!!!");
  const url = req.url;
  const method = req.method;
  if (url === "/") {
  }
  if (url === "/message" && method === "POST") {
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!!!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
