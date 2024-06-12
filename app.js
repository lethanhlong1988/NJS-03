const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers, req.url, req.method);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");

  res.write("<head>");
  res.write("<head><title>My First Page</title><head>");

  res.write("<body><h3>Hello from my Node.js Server!!!</h3></body>");
  res.write("</html>");
});
server.listen(3000);
