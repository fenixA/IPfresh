//Loads the settings file
var settings = require('./ipfresh_server_settings.json');

var os = require('os');
var ws = require('ws');

var websocket = new ws('ws://' + settings.host + ':' + settings.port);

websocket.on('open', function() {
    websocket.sent(os.hostname());
});

websocket.on('message', function(message) {
	console.log(message);
});
