const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Error handling is missing in this code