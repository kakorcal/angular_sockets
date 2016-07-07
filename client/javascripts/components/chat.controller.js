(()=>{
  angular.module('chat.component', [])
    .controller('ChatController', ChatController);

  function ChatController(ChatService){

  }

  ChatController.$inject = ['ChatService'];
})();