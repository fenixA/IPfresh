var settings = require('./ipfresh_server_settings.json');

var ws = require('ws');

var websocket = new ws.Server({'port': settings.port});

websocket.on('connection', function(socket) {
	socket.on('message', function(message) {
		console.log(socket.url + ": " + message);
		socket.send(message);
		socket.close(1000, "bla");
	});
});

