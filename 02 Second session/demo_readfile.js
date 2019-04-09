var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
   console.log(req);
   fs.writeFile("./request.txt",function(err, data){});
  fs.readFile('demofile2.html', function(err, data) {
  // console.log(err);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);