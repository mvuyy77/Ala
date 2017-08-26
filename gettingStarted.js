/**
 * Created by mvuyy on 8/18/17.
 */
let alaSql = require('alasql'),
    fs = require('fs'),
    _ = require('lodash');

//Create a New Database
/*let myFirstAlaDatabase = new alaSql.Database();
myFirstAlaDatabase.exec('CREATE TABLE city (city string, population number)');
myFirstAlaDatabase.exec("INSERT INTO city VALUES ('Chennai', 1), ('Nellore', 2)");

let result = myFirstAlaDatabase.exec('SELECT * INTO CSV ("city1.csv", {separator:"," }) FROM city');
console.log(`Result is : ${result}`);*/
let result = '';
alaSql.promise('SELECT * FROM CSV("sample.csv", {separator:","})') // WHERE TEST_CASE_ID="TC2"
.then(function(queryOutput){
    result = _.compact(_.map(queryOutput, function(data, iteration){
        let client = {'CLIENT' : {}};
        let product = {'PRODUCT' : {}};

       /* if(data['TEST_CASE_ID'] === 'TC1'){
            client['CLIENT']['name'] = 'Madhu';
            client['CLIENT']['age'] = '40';
            product['PRODUCT']['type'] = 'RISK';
            let newData = _.extend(data, client, product);
            console.log(newData);
        }*/
        if(data['IN_SCOPE'].toUpperCase() === 'YES'){
            return {
                iteration,
                productType: data['PRODUCTS_TO_ADD'],
                testCaseList : data['TEST_CASE_ID'],
                clientType : data['CLIENT_TYPE'],
            }
        }
    }));
    //console.log(queryOutput);
    console.log(result);
    alaSql('SELECT * INTO CSV("finalResults.csv", {separator:","}) FROM ?',[result]);
    //fs.appendFileSync('finalResults.csv', );
}).catch(function(err){
    console.log(`Error Is: ${err}`);
});

//Examples for using Lodash Methods
