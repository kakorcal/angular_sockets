(()=>{
  angular.module('chat.component', [])
    .controller('ChatController', ChatController);

  function ChatController($scope, ChatService){
    let vm = this;

    vm.chats = [
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'},
      {user: 'Ken', text: 'Hello'},
      {user: 'Foo', text: 'Bar baz'},
      {user: 'Test', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur, blanditiis laboriosam, animi necessitatibus sapiente.'}
    ];

    // when user goes on chat.html, open sockets
    ChatService.connect();

    // 

    // when user leaves, disconnect sockets
    $scope.$on('$locationChangeStart', e=>{
      ChatService.disconnect(true);
    });
  }

  ChatController.$inject = ['$scope', 'ChatService'];
})();