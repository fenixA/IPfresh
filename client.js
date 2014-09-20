var ipfresh = require('./client/ipfresh-client');

setInterval(function() {
    ipfresh.start();
}, 60000);
