const express = require('express');
const path = require('path');
let app = express();

app.use(express.static(__dirname + '/dist/'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080);
