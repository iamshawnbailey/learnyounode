#!/usr/bin/env node

var http = require('http')
var responseLines = []

module.exports = function(url, callback){
	http.get(url, function(response){
		response.on('data', function(data){
				responseLines.push(data.toString())
				//console.log("Module: " + responseLines)
		})
		response.on('end', function(data){
			return callback(null, responseLines)
		})
		
		
	})
	
	
	
}
