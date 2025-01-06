const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Logic to handle requests
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } catch (error) {
    console.error('Request processing failed:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;

server.on('error', (err) => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use.');
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});