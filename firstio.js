#!/usr/bin/env node

var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var stringBuf = buf.toString()

var array = stringBuf.split("\n")

console.log(array.length - 1)