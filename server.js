var express = require('express');
var app = express();
var _port = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', function (req,res) {
	res.send('About us!!');
});

app.use(express.static('public'));

app.listen(_port, function () {
	console.log('Express started on port '+_port);
});
