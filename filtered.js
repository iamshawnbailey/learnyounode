#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

var files = []
var compare = '.' + process.argv[3]

fs.readdir(process.argv[2], function callback(err, data){
	//console.log(data)
	for(i=0;i<data.length;i++){
		//console.log(path.extname(data[i]))
		if(path.extname(data[i].toString()) == compare){
			//console.log(data[i])
			files.push(data[i])
			//console.log(files)
		}
	}
	
	for(i=0;i<files.length;i++){
		console.log(files[i])
	}
})
		