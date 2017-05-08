const
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

const server = http.createServer((req, res) => {

    const pathname = url.parse(req.url).pathname;
    const filepath = path.join(__dirname, pathname);

    fs.stat(filepath, (err, stats) => {
        if (!err && stats.isFile()) {
            console.log('200 ' + req.url);
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        } else {
            console.log('404 ' + req.url);
            res.writeHead(404);
            res.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');