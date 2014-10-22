var Hapi=require('hapi')
	, server=Hapi.createServer(process.env.port||3000)
	, rateOpts={
		namespace: 'requests-ratelimit',
		global: {
			limit: 5,
			duration: 10 
		}
	};

// global rate limit setting
server.pack.register({
	plugin: require('hapi-ratelimit-basic'),
	options: rateOpts
}, function(err) {
		console.log(err||'Ratelimit plugin is loaded');
});

// route specific rate limit setting

server.route({
	method: 'POST',
	path: '/login',
	handler: function(request, reply) {
		reply('ok');	// just for testing's sake
	},
	config: {
		plugins: {
			'hapi-ratelimit-basic': {
				limit: 3,
				duration: 5
			}
		}
	}
});

server.start( function() {
	console.log('server is started at '+server.info.uri);
} )
