#!/usr/bin/env node

var http = require('http')
var fs = require('fs')

server = http.createServer(function(req, resp){
	fs.createReadStream(process.argv[3]).pipe(resp)
})

server.listen(process.argv[2])