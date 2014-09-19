var os = require('os');
var ws = require('ws');

var websocket = new ws('ws://vertigo.canopus.uberspace.de:65432');

websocket.on('open', function() {
    websocket.sent(os.hostname());
});

// test
