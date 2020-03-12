const load = require('../pb/loader');

const ChatClient = load({
  serviceName: 'ChatService',
  address: 'localhost:3333',
  fileName: 'chat',
});

module.exports = ChatClient;


