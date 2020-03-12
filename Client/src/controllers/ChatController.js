const ChatService = require('../services/chat');

class ChatController {
  async send(id, message) {

    const response = await ChatService.SendMessage({id});

    return response;
  }
}

module.exports = new ChatController();