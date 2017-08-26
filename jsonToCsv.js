/**
 * Created by mvuyy on 8/25/17.
 */
/*
    This is what I want to do
    1. I have a JSON output from the DB, I want to use the AlaSQL to generate the CSV output
*/

let alaSql = require('alasql'),
    fs = require('fs'),
    _ = require('lodash');

let result = [
    {name: 'Madhu', age: 40, sex: 'Male'},
    {name: 'Papa', age: 39, sex: 'Female' },
    {name: 'Chikki', age: 9, sex: 'Female'},
    {name: 'Lucky', age: 6, sex: 'FemMale'},
    {name: 'Dummy', age: '', sex: ''}
];

convertJsonToCsv = (fileName, jsonObject) => {
    alaSql(`SELECT * INTO CSV("${fileName}", {separator:","}) FROM ?`,[jsonObject]);
};

convertJsonToCsv('test.csv', result);


exports.module = {
    convertJsonToCsv
};