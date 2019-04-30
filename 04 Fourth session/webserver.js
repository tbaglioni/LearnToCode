var http = require('http');
var url = require('url');
var fs = require('fs');
const port = 8080;

http.createServer(function (req, res) {
        const query = url.parse(req.url, true).query;
        const content = query.content;
        const nyurlparam = query.nyurlparam;
        const elephant = query.elefant;

        const textFile = './textFile.txt';

        res.writeHead(200, { 'Content-Type': 'text/html' });

        if (content) {
            fs.appendFileSync(textFile, content + '\r\n', 'utf8');
            fs.appendFileSync(textFile, nyurlparam + '\r\n', 'utf8');
            fs.appendFileSync(textFile, elephant + '\r\n', 'utf8');
        }

        const fileContents = fs.readFileSync(textFile, 'utf8');

        res.write("<b>File contents: </b><br/>");
        res.write("<textarea cols='30' rows='10'>" + fileContents + '</textarea><br/>');
        res.write("----------" + '<br/>');
        res.write("<b>Current url params:</b><br/>" + JSON.stringify(query) + '<br/>');
        res.end();
    })
    .listen(port);

    console.log("Server ready. http://localhost:" + port);