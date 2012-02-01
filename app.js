var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {

    console.log(req.url.split('/').splice(1).join(''));

    fs.readFile( req.url.split('/').splice(1).join(''), function(err, data){
        if(err) console.log(err);
        
//        res.writeHead(200, {'Content-Type': 'text/html'});
        res.writeHead(200);
        res.end(data);
    });

}).listen(3000, "127.0.0.1");


