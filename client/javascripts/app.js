(()=>{
  angular.module('chat-app', [
    'ngMaterial',
    'ngAnimate',
    'btford.socket-io',
    'chat.routes',
    'chat.services',
    'chat.component'
  ]);
})();