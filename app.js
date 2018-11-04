const http = require('http');
const fs = require('file-system');

http.createServer(function(req,res){
	
	let file =fs.readFileSync('.' +req['url'] + '.txt','utf8');
	res.write(file);
	res.end();
}).listen(3000);