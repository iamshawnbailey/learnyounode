#!/usr/bin/env node

var lab9module = require('./lynlab9module')

lab9module(process.argv[2], process.argv[3], process.argv[4], function(err, data){
	//console.log("Callback:" + data)
	data.forEach(function(entry){
		//console.log("entry")
		console.log(entry)
	})
})