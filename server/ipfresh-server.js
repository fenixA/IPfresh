var settings = require('./settings.json');

var fs = require('fs');
var ws = require('ws');

exports.start = function() {
    var webSocketServer = new ws.Server({'port': settings.port});

    webSocketServer.on('connection', function(webSocket) {
        var remoteAddress = webSocket.upgradeReq.connection.remoteAddress;

        console.log(remoteAddress + " connected");

        webSocket.on('close', function() {
            console.log(remoteAddress + " disconnected");
        });

        webSocket.on('message', function(message) {
            webSocket.send(message);
            //webSocket.close();
        });
    });
}
