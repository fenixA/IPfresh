var settings = require('./ipfresh_server_settings.json');

var fs = require('fs');
var ws = require('ws');

var webSocketServer = new ws.Server({'port': settings.port});

webSocketServer.on('connection', function(webSocket) {
    webSocket.on('message', function(message) {
        var data = {};
            data['ip'] = webSocket.upgradeReq.connection.remoteAddress;

        fs.writeFile(message, data, function() {
            webSocket.close();
        })
    })
})
