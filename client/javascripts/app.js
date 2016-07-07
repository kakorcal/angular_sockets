(()=>{
  angular.module('chat-app', [
    'ngMaterial',
    'ngAnimate',
    'btford.socket-io',
    'chat.routes',
    'socket.services',
    'chat.component'
  ]);
})();