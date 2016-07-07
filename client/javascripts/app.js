(()=>{
  angular.module('chat-app', [
    'ngMaterial',
    'ngAnimate',
    'angular-bootbox',
    'btford.socket-io',
    'chat.routes',
    'socket.services',
    'chat.component'
  ]);
})();