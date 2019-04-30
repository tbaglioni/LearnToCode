var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
        const query = url.parse(req.url, true).query;
        const content = query.content;
        console.log(content);
        const nyurlparam = query.nyurlparam;
        const elephant = query.elefant;

        const textFile = './textFile.txt';

        res.writeHead(200, { 'Content-Type': 'text/html' });

        // if (content) {
        //     fs.appendFileSync(textFile, content + '/r/n', 'utf8');
        //     fs.appendFileSync(textFile, nyurlparam + '/r/n', 'utf8');
        //     fs.appendFileSync(textFile, elephant + '/r/n', 'utf8');
        // }

        // const fileContents = fs.readFileSync(textFile, 'utf8');

        // res.write(fileContents);
        res.end();
    })
    .listen(8080);