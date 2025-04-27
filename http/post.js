const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method == 'POST' && req.url == '/api/data') {
    let body = "";

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log(`Received data: ${body}`);
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ messsage: 'Data received successfully', data: body }))

    })
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404 not found');
  }
});

server.listen(3000, () => {
  console.log("Server Listening on port 3000...");
})