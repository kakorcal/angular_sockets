(()=>{
  angular.module('chat.component', [])
    .controller('ChatController', ChatController);

  function ChatController($scope, Socket){
    let vm = this;

    // when user goes on chat.html, open sockets
    Socket.connect();

    // get all chats
    Socket.emit('request-users');

    // set users chats
    Socket.on('users', ({chats})=>{
      vm.chats = chats;
    });
    
    // when user leaves, disconnect sockets
    $scope.$on('$locationChangeStart', e=>{
      Socket.disconnect(true);
    });
  }

  ChatController.$inject = ['$scope', 'Socket'];
})();