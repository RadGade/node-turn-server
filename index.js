var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'none',
  listeningPort: 8080
});
server.start()