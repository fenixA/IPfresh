var ws = require('ws');

var websocket = new ws.Server({'port': 65432});

websocket.on('connection', function(socket) {
	socket.on('message', function(message) {
		socket.send(message);
	});
});

