
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

module.exports = middleware;
