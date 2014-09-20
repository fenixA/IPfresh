var settings = require('./settings.json');
var debug = settings.debug;

var os = require('os');
var ws = require('ws');

exports.start = function() {
    var webSocket = new ws('ws://' + settings.host + ':' + settings.port);

    webSocket.on('close', function(code, data) {
        if (debug) console.log("disconnected (" + code + ")");
    });

    webSocket.on('error', function(error) {
        console.error(error);
    });

    webSocket.on('message', function(message) {
        console.log("server: " + message);
    });

    webSocket.on('open', function() {
        if (debug) console.log("connected (" + webSocket.url + ")");

        webSocket.send(os.hostname());
    });
}
