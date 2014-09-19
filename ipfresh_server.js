var settings = require('./ipfresh_server_settings.json');

var ws = require('ws');

var webSocketServer = new ws.Server({'port': settings.port});

webSocketServer.on('connection', function(webSocket) {
	webSocket.on('message', function(message) {
		var remoteAddress = webSocket.upgradeReq.connection.remoteAddress;
		
		console.log(remoteAddress + ": " + message);

		webSocket.send(message);
		webSocket.close(1000, "bla");
	})
})

