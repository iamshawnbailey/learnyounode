#!/usr/bin/env node

var lab7module = require('./lynlab7module')

lab7module(process.argv[2], function(err, data){
	//console.log("Callback:" + data.toString())
	data.forEach(function(entry){
		console.log(entry)
	})
})