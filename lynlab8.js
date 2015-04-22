#!/usr/bin/env node

var lab8module = require('./lynlab8module')

lab8module(process.argv[2], function(err, data){
	//console.log("Callback:" + data)
	data.forEach(function(entry){
		//console.log("entry")
		console.log(entry)
	})
})