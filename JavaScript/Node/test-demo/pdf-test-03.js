var textract = require('textract');

textract.fromFileWithPath('./source/test.doc', {preserveLineBreaks: true}, function( error, text ) {
	console.log(text);
})