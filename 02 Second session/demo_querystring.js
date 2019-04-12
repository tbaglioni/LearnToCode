var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.date + "/" + q.month + " - " + q.year;
  txt += "<br/> Go to the following URL and play with the URL parameters";
  txt += "<br/> <a href='http://localhost:8080/?date=12&month=april&year=2019'>http://localhost:8080/?date=12&month=april&year=2019</a>";
  res.end(txt);
}).listen(8080);