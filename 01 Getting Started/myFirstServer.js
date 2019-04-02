var http = require('http');
const chalk = require('chalk');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(chalk.red('gtfdsd!'));
 // res.end('Hello World!');
}).listen(8080);