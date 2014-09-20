var settings = require('./settings.json');

var os = require('os');
var ws = require('ws');

exports.start = function() {
    var webSocket = new ws('ws://' + settings.host + ':' + settings.port);

    webSocket.on('close', function() {

    });

    webSocket.on('error', function(error) {
        console.error(error);
    });

    webSocket.on('message', function(message) {
        console.log(message);
    });

    webSocket.on('open', function() {
        webSocket.send(os.hostname());
    });
}
