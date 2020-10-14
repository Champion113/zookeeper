const express = require('express');
const app = express();

//route created front-end can request data from
const { animals } = require('./data/animals');
//add the route
app.get('/api/animals', (req, res) => {
    res.send('Hello!');
  });
























app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });