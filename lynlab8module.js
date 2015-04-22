#!/usr/bin/env node

var http = require('http')
var count = 0
var string = new String()
var responseInfo = []

module.exports = function(url, callback){
	http.get(url, function(response){
		response.on('data', function(data){
				count += Number(data.toString().split('').length)
				string = string.concat(data.toString())
		})
		response.on('end', function(data){
			responseInfo.push(count)
			responseInfo.push(string)
			return callback(null, responseInfo)
		})
		
		
	})
	
	
	
}
