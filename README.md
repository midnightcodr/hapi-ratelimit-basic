# hapi-ratelimit-basic
This is a simple ip (and optional path) based rate limit plugin for Hapi using redback. Credit goes to [https://www.npmjs.org/package/hapi-ratelimit](https://www.npmjs.org/package/hapi-ratelimit) and [https://github.com/glaubinix/hapi-api-rate-limit](https://github.com/glaubinix/hapi-api-rate-limit)

# usage
```javascript

server.pack.register({
	name: 'hapi-ratelimit-basic',
	plugin: require('har'), 
	options: rateOpts
}, function() {
		console.log('plugin har is loaded');
});

```
