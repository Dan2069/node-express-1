const fs = require('fs');
const process = require('process');
const axios = require('axios');


// function handleOutput(text, out) {
//     if (out) {
//         console.log('Line 8');
//         fs.writeFile(out, text, 'utf8', function(err){
//             console.log("line 10");
//             console.log(out);
//             if (err) {
//                 console.error(`Couldn't write ${out}: ${err}`);
//                 process.exit(1);
//             }
//         });
//     }
//     else {
//         console.log('Line 17');
//         console.log(text);

//     }
// }



// console.log('Line 23');

// function cat(path, out) {
//     fs.readFile(path, 'utf8', function(err, data) {
//         console.log("Line 27");
//         if (err) {
//             console.error(`Error reading ${path}: ${err}`);
//             process.exit(1);
//         }
//         else {
//             console.log("Line 33");
//             const lines = data.split(/\r?\n/);
//             for(let y = 0; y < 4; y++){
//                 let link = new URL(lines[y]);
//                 let domain = link.hostname
//                 // console.log(link);
//                 // console.log(domain);
//                 // console.log("Line 38");
//                 let out = domain + '.txt';
//             handleOutput(lines[y],out)};
//         }
//     });
// }

// // console.log("Line 33");

// // console.log("Line 56");


// async function webCat(url, out) {
//     try {
//         let resp = await axios.get(url);
//         handleOutput(resp.data, out)
//         console.log("Line 46");
//     }
//     catch (err) {
//         console.log(`Error fetching ${url}: ${err}`);
//         process.exit(1);
//     }
// }
// // console.log("Line 53");
// let path;
// let out;

// // if (process.argv[2] === '--out') {
// //     console.log("Line 58");
// //     out = process.argv[3];
// //     path = process.argv[4];
// // }
// // else{
// //     console.log("Line 63");
// //     path = process.argv[2];
// // }

// // if (path.slice(0,4) === 'http') {
// //     console.log("Line 68");
// //     webCat(path, out);
// // }
// // else {
// //     console.log("Line 72");
// //     cat(path, out);
// // }