//Loads the settings file
var settings = require('./ipfresh_client_settings.json');

var os = require('os');
var ws = require('ws');

var websocket = new ws('ws://' + settings.host + ':' + settings.port);

websocket.on('close', function(code, data) {
	console.log(code + data);
})

websocket.on('error', function(error) {
	console.log(error);
})

websocket.on('open', function() {
    websocket.send(os.hostname());
})

websocket.on('message', function(message) {
	console.log(message);
})
