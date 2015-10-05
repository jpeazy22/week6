var fs = require('fs')  //this is not a local file.  node understands this is a 
//built in module.

var notesText = fs.readFileSync('./node.js', 'utf-8')
fs.writeFileSync('notes_copy.txt', notesText)
console.log(notesText)



// write a node script that copies a text file
// example:
// command line - node copy.js source.txt destination.txt

//'=-=-=-=-=-=-=-=-= Answer -=-=-=-=-=-=-=-=-'
 var fs = require('fs')
 var sourceFileName = process.argv[2]
 var targetFileName = process.argv[3]
 var sourceFileContents = fs.readFileSync(
 	sourceFileName, 'utf-8')
 fs.writeFileSync(targetFileName, sourceFileContents)