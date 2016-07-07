(()=>{
  angular.module('chat.services', [])
    .service('ChatService', ChatService);

  function ChatService(socketFactory){
    return socketFactory();
  }
  
  // from btford.socket-io
  ChatService.$inject = ['socketFactory'];
})();