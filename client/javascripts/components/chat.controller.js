(()=>{
  // TODO: The first person who joins the chat is unable to see if users left or joined

  // adding scroll glue directive
  angular.module('chat.component', ['luegg.directives'])
    .controller('ChatController', ChatController);


  function ChatController($scope, Socket, bootbox){
    let vm = this;

    // TODO: bootbox should be in home.html
    let promptUsername = function(message){
      bootbox.prompt(message, username=>{
        if(username){
          // TODO: Should request to server and check if username is takens
          Socket.emit('Add User', {username});
        }else{
          promptUsername('You Must Enter A Username!!!');
        }
      });
    };

    vm.sendMessage = function(message){
      if(message){
        Socket.emit('Send Message', {message});
        vm.message = '';        
      }
    };

    // when user goes on chat.html, open sockets
    Socket.connect();

    // dummy datas
    Socket.emit('Request Dummy Data');
    Socket.on('Receive Dummy Data', ({chats})=>{
      vm.chats = chats;
      Socket.emit('Request Users');
    });
    
    Socket.on('Receive Users', ({users})=>{
      vm.users = users;
    });

    Socket.on('Receive Message', data=>{
      vm.chats.push(data);
    });
    
    Socket.on('Receive User', user=>{
      vm.users.push(user);
      vm.chats.push({username: user, message: 'Entered Room'});
    });

    Socket.on('Remove User', user=>{
      vm.users.splice(vm.users.indexOf(user), 1);
      vm.messages.push({username: user, message: 'Left Room'});
    });

    // Ask for username before entering
    promptUsername('Please Enter An Username');
    
    // TODO: Refactor to not use $scope
    // when user leaves, disconnect sockets
    $scope.$on('$locationChangeStart', e=>{
      Socket.disconnect(true);
    });
  }

  ChatController.$inject = ['$scope', 'Socket', 'bootbox'];
})();