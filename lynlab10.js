#!/usr/bin/env node

var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function(socket){

	console.log(strftime('%Y-%m-%d %H:%M') + '\n')

})

server.listen(process.argv[2])