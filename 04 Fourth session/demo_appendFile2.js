var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

var fs = require('fs');

fs.appendFile('mynewfile4.txt', 'Testing! Brian hjælp mig lidt', function (err) {
    if (err){
        throw err;
    }
    console.log('Saved!');
});