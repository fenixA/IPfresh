var settings = require('./ipfresh_server_settings.json');
if (settings.debug) {console.log(settings)};

var ws = require('ws');

var websocket = new ws.Server({'port': settings.port});

websocket.on('connection', function(socket) {
	socket.on('message', function(message) {
		console.log(message);
		socket.send(message);
	});
});

