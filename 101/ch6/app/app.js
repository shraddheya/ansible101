var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(80, () => {
  console.log('running in port 80...F')
});