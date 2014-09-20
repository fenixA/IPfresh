var settings = require('./settings.json');

var fs = require('fs');
var ws = require('ws');

exports.start = function() {
	var webSocketServer = new ws.Server({'port': settings.port});

	webSocketServer.on('connection', function(webSocket) {
	    webSocket.on('message', function(message) {
	        var remoteAddress = webSocket.upgradeReq.connection.remoteAddress;
	        webSocket.send(remoteAddress);
	        //webSocket.close();
	    })
	})
}
