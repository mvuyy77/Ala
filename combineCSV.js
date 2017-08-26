/**
 * Created by mvuyy on 8/20/17.
 */
let fs = require('fs');
let data = fs.readFileSync('sample.csv')
fs.appendFileSync('finalResults.csv', data);