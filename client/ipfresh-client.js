//Loads the settings file
var settings = require('./settings.json');

var os = require('os');
var ws = require('ws');

exports.start = function() {
    var webSocket = new ws('ws://' + settings.host + ':' + settings.port);

    webSocket.on('error', function(error) {
        console.error(error);
    });

    webSocket.on('open', function() {
        setInterval(function() {
            webSocket.send(os.hostname())
        }, 1000);
    });
}
