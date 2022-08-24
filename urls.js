const fs = require('fs');
const process = require('process');
const axios = require('axios');



function cat(path) {
    fs.readFile(path, 'utf8', function(err, data){
        if (err){
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        else {
            // console.log(data);
            let exmpl = data.toString().split("\n"); //takes the four links and turns it into a string and separates them with \n
            for(i in exmpl){ // for every link in teh exmpl, we're going to URL each of them and get their hostname out of it.
                const { href, hostname} = new URL(exmpl[i]) // The hostname will be the name for the txt files. "hostname".txt
                // console.log(href, hostname);
                // console.log("Line 21");
                webCat(href, hostname);
            };
        }
    });
}

async function webCat(url, hostname) {
    try {
        let resp = await axios.get(url);
        // console.log(resp.data);
        handleOutput(resp.data, hostname);
        console.log(`Wrote to ${hostname}`);
    }
    catch (err) {
        // console.log(`Error fetching ${url}: ${err}`);
        // process.exit(1);
        console.log(`Couldn't download ${url}`);
    }
}

function handleOutput(body, output){
    if (output){
        fs.writeFile(output, body, 'utf8', function(err){
            if (err){
                console.log(`Couldn't write ${output}: ${err}`);
                process.exit(1);
            }
        })
    }
    else {
        console.log("Line 59");
    }
}





cat(process.argv[2]);