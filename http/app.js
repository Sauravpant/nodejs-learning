const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1> Home Page </h1>')
  }
  else if (req.url === '/api/products') {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify([{ id: 1, name: 'Saurav' }, { id: 2, name: 'Unknown' }]));
  }
  else {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.write('404 not Found')
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server Listening on port 3000...")
});