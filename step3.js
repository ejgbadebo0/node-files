const fs = require('fs');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, "utf8", function(err, data) {
        if (err) {
            console.log('ERROR: ', err);
            process.exit(1);
        }
        else {
            console.log(data);     
        }    
    });
}; 

function catWrite(path, output) {
    fs.writeFile(path, output, "utf8", function(err) {
        if (err) {
            console.log('ERROR: ', err);
            process.exit(1);
        }
        else {
            console.log(output);     
        }    
    });

async function webCat(url) {
    try {
        let res = await axios.get(url);
        console.log(res.data);
    }
    catch (err) {
        console.log('ERROR: ', err);
        process.exit(1);
    }
}

let input = process.argv[2];
if (input == '--out') {
    output = process.argv[3];
    path = process.argv[4];
} 
else {
    if (input.slice(0, 4) === 'http') {
        webCat(input);
    } 
    else {
        cat(input);
    }
}}