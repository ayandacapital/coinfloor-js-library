var Coinfloor = require('../Coinfloor.js');
var credentials = require('./testCredentials.js');

var coinfloor = new Coinfloor(credentials.coinfloorID, credentials.password, credentials.api_key);

// coinfloor.connect();
// coinfloor.watchTicker();

// coinfloor.getTicker(function(err, res){
//     if(err) throw(err);
//
//     console.log(res);
// });
