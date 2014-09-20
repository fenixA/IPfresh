//Loads the settings file
var settings = require('./ipfresh_client_settings.json');

var os = require('os');
var ws = require('ws');

var webSocket = new ws('ws://' + settings.host + ':' + settings.port);

webSocket.on('close', function(code, data) {
    console.log("Connection closed (" + code + "): " + data);
})

webSocket.on('error', function(error) {
    console.error("Error: " + error);
})

webSocket.on('open', function() {
    webSocket.send(os.hostname());
})

webSocket.on('message', function(message) {
    console.log("Server: " + message);
})
