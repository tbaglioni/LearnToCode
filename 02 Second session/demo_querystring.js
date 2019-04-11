var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  txt += "<br/> Go to the following URL and play with the URL parameters";
  txt += "<br/> <a href='http://localhost:8080/?year=someYear&month=someMonth'>http://localhost:8080/?year=someYear&month=someMonth</a>";
  res.end(txt);
}).listen(8080);