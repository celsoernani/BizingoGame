const load = require('../pb/loader');

const GameClient = load({
  serviceName: 'GameService',
  address: 'localhost:3333',
  fileName: 'game',
});

module.exports = GameClient;


