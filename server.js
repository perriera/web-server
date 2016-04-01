var express = require('express');
var app = express();
var _port = 3000;

var middleware = {
	requireAuthentication: function (req,res,next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req,res,next) {
		var tm = new Date().toString();
		console.log('Request: ' + tm + req.method + ' ' + req.originalUrl );
		next();
	}
};

app.use(middleware.logger);

app.get('/about', function (req,res) {
	res.send('About us!');
});

app.use(express.static('public'));

app.listen(_port, function () {
	console.log('Express started on port '+_port);
});
