const express = require('express');
let axios = require('axios');
const app = express();
const ExpressError = require("./expressError");


app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    if (!results) throw new ExpressError("Not Found!", 404);

    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return res.send(JSON.stringify(out));
  } catch {
    return next(err);
  }
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
