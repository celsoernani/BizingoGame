let messages = [];

const addMessage = (message) => {
  messages.push(message);
  return {message};
}
const findMessages = () => {
    return messages;
}


module.exports = {addMessage, findMessages}