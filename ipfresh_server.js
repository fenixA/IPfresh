var settings = require('./ipfresh_server_settings.json');

var ws = require('ws');

var websocket = new ws.Server({'port': settings.port});

websocket.on('connection', function(socket) {
	socket.on('message', function(message) {
		socket.send(message);
	});
});

