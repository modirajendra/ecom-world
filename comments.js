// create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// create server
http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/') {
        display_form(res);
    } else if (pathname == '/comment') {
        save_comment(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}).listen(1337, () => {
    console.log('Server running at http://localhost:1337/');
})