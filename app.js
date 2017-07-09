
// need to require express to use it
var express = require('express');
// require built-in path module which provides utilities for working with file and directory paths
var path = require('path');
// set var equal to express func so can use var name to call express()
var app = express();
//set up port for Heroku
var port = process.env.PORT || 3004;
// serve up location of static files (html, css, js, images, etc) for express to use , express.static
// is built in express middleware function
app.use(express.static('public'));

// get absolute path for '/', _dirname is current directory executing app.js..if had app.js in server folder
// would have to back up a folder ../ in path
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
// listen for server on port 3000
app.listen(port, function() {
  console.log('up on port:',port);
});
