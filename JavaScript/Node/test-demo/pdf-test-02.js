let fs = require('fs');
let PDFParser = require("pdf2json");

let pdfParser = new PDFParser(this,1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
	let data = pdfParser.getRawTextContent();
	console.log(data);
});

pdfParser.loadPDF("./source/test.pdf");