const fs = require('fs');
const csv = require('csv');
const parse = require('csv-parse');

let inputFile = 'test.csv';
console.log('Starting to process file');


const parser = parse({ delimiter: ',' }, function(err, data) {
  if (err) {
    console.log(err);
  }
   let fileredData = data.filter(dataLine => 
        dataLine[0][0] !== " "
    )
    console.log(fileredData);
});



fs.createReadStream(inputFile).pipe(parser)

