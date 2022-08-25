const express = require('express');
let axios = require('axios');
var app = express();


// console.log("Line 30");
app.post('/', async function(req, res, next) {
  try {
    // console.log("Line 33");
    let results = await Promise.all (req.body.developers.map(async d => {
      // console.log("Line 35");
      return await axios.get(`https://api.github.com/users/${d}`);
    }));
    // console.log("Line 38");
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    // console.log("Line 40");
    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.listen(3000);