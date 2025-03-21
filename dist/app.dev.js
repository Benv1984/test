"use strict";

var express = require('express');

var app = express();
var port = 3001;
app.use(express.static('public'));
app.get('/hello', function (req, res) {
  res.send('hello world');
});
app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});
//# sourceMappingURL=app.dev.js.map
