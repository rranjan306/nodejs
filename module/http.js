const http = require('http');

const server = http.createServer(function(req, res) {
  if(req.url === '/') {
    res.write('Welcome to NCRT Warehouse');
    res.end();
  };

  if(req.url === '/history') {
    res.write('chapter 1.');
    res.end();
  }
});

server.listen(3000);

module.exports = http;