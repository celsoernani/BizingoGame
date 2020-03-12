module.exports = {
  SendMessage(call, callback) {
    const {id} = call.request;
    //pegar dados no user me algum estado aqui no server. 
    callback(null, {id})
  },
  
  AllMessages(call, callback) {
    const {message} = call.request;
    callback(null, {message})

  }
}
