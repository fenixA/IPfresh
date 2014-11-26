var settings = require('./settings.json');
var debug = settings.debug;

var fs = require('fs');
var ws = require('ws');

exports.start = function () {
	var webSocketServer = new ws.Server({'port': settings.port});

	webSocketServer.on('connection', function (webSocket) {
		var remoteAddress = webSocket.upgradeReq.connection.remoteAddress;

		if (debug) console.log(remoteAddress + ": connected");

		webSocket.on('close', function () {
			if (debug) console.log(remoteAddress + ": disconnected");
		});

		webSocket.on('message', function (host) {
			if (debug) {
				console.log(remoteAddress + ": " + host);
				webSocket.send(host);
			};

			var hosts;

			fs.exists('hosts.json', function (exists) {
				if (exists) {
					hosts = JSON.parse(fs.readFileSync('hosts.json', 'utf8'));
				} else {
					hosts = {};
				}

				hosts[host] = remoteAddress;

				fs.writeFile('db.json', JSON.stringify(hosts, undefined, '\t'), function (err) {
					webSocket.close();
				})
			});
		});
	});
}
