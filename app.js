const http = require('http');
const fs = require('file-system');

http.createServer(function(req,res){
	res.write(req['url']);
	res.end();
}).listen(3000)