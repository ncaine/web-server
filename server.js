var express = require('express');

var app = express()
var middleware = require('./middleware.js');

// app.use(middleware.requireAutentication);
app.use(middleware.logger);


app.get('/about', middleware.requireAutentication, function(req, res) {
	res.send('about us!');
});

app.use(express.static(__dirname + '/public'));

var PORT = 3000;
app.listen(PORT, function(){
	console.log('express server started on port: ' + PORT);
});

