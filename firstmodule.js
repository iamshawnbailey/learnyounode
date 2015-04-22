#!/usr/bin/env node

module.exports = function(dirPath,filter,callback){
	var fs = require('fs')
	var path = require('path')

	var files = []
	var compare = '.' + filter

	fs.readdir(dirPath, function callback2(err, data){
		//console.log(data)
		if(err){
			return callback(err)
		}
		for(i=0;i<data.length;i++){
			//console.log(path.extname(data[i]))
			if(path.extname(data[i].toString()) == compare){
				//console.log(data[i])
				files.push(data[i])
				//console.log(files)
			}
		}
	
		return callback(null, files)
	})
}
		