#!/usr/bin/env node

var firstmodule = require('./firstmodule')

firstmodule(process.argv[2], process.argv[3], function callback(err, data){
	data.forEach(function(entry){
		console.log(entry)
	})
})