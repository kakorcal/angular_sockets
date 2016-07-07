(()=>{
  angular.module('socket.services', [])
    .service('Socket', Socket);

  function Socket(socketFactory){
    return socketFactory();
  }
  
  // from btford.socket-io
  Socket.$inject = ['socketFactory'];
})();