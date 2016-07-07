(()=>{
  angular.module('chat.component', [])
    .controller('ChatController', ChatController);

  function ChatController($scope, ChatService){
    // when user goes on chat.html, open sockets
    ChatService.connect();

    // when user leaves, disconnect sockets
    $scope.$on('$locationChangeStart', e=>{
      ChatService.disconnect(true);
    });
  }

  ChatController.$inject = ['$scope', 'ChatService'];
})();