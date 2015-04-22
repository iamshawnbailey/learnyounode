#!/usr/bin/env node

var http = require('http')
var string1 = new String()
var string2 = new String()
var string3 = new String()
var callbackCount = 0
var responseArray = []

module.exports = function(url1, url2, url3, callback){
	http.get(url1, function(response){
		response.on('data', function(data){
				string1 = string1.concat(data.toString())
		})
		response.on('end', function(data){
			callbackCount++
			respond(callbackCount)
		})
	})
	
	http.get(url2, function(response){
		response.on('data', function(data){
				string2 = string2.concat(data.toString())
		})
		response.on('end', function(data){
			callbackCount++
			respond(callbackCount)
		})
	})
	
	http.get(url3, function(response){
		response.on('data', function(data){
				string3 = string3.concat(data.toString())
		})
		response.on('end', function(data){
			callbackCount++
			respond(callbackCount)
		})
	})
	
	function respond(callbackCount){
		if(callbackCount == 3){
			responseArray.push(string1)
			responseArray.push(string2)
			responseArray.push(string3)
			return callback(null, responseArray)
		}
	}
	
	
}