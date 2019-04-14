var http = require('http');
var url = require('url');
// Look into the Date object
// // Google ?
// Instantiate a new Date object
// set variables day, month and year with current ones
// Present current day, month, year for the user and update example link

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.date + "/" + q.month + " - " + q.year;
  txt += "<br/> Go to the following URL and play with the URL parameters";
  txt += "<br/> <a href='http://localhost:8080/?day=12&month=april&year=2019'>http://localhost:8080/?day=12&month=april&year=2019</a>";
  res.end(txt);
}).listen(8080);