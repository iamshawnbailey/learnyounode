#!/usr/bin/env node

var fs = require('fs')

fs.readFile(process.argv[2], function callback(err, buf){
	var lines = buf.toString().split("\n").length - 1
	console.log(lines)
	})