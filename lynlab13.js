#!/usr/bin/env node

var http = require('http')
var url = require('url')
var parsedURL
var today = new Date()

function parseTime(parsedURL, path){
	var queryString=parsedURL.search
	var d = new Date(queryString.substring(5, 28))
	if(path == '1'){
		var jsonString = '{"hour":' + d.getHours() +',"minute":' + d.getMinutes() + ',"second":' + d.getSeconds() + '}'
		return JSON.parse(jsonString)
	}else{
		var time = d.getTime().toString()
		var unixJSON = '{"unixtime":' + time + '}'
		return JSON.parse(unixJSON)
	}
}
	
server = http.createServer(function(req, resp){
	if(req.method == 'GET'){
		parsedURL = url.parse(req.url)
		if(parsedURL.pathname ==  '/api/parsetime'){
			resp.writeHead(200,{'Content-Type':'application/json'})
			resp.end(JSON.stringify(parseTime(parsedURL, '1')))
		}else if(parsedURL.pathname == '/api/unixtime'){
			resp.writeHead(200,{'Content-Type':'application/json'})
			resp.end(JSON.stringify(parseTime(parsedURL, '2')))
		}
	}	
})

server.listen(process.argv[2])