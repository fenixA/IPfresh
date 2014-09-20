var ipfresh = require('./ipfresh-client');

setInterval(function() {
    ipfresh.start();
}, 60000);
