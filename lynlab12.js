#!/usr/bin/env node

var http = require('http')
var map = require('through2-map')
var fs = require('fs')

var server = http.createServer(function(req, resp){

	if(req.method == 'POST'){
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase()
		})).pipe(resp)
	}
})

server.listen(process.argv[2])