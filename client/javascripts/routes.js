(()=>{
  angular.module('chat.routes', ['ngRoute']).config(Routes);

  function Routes($routeProvider, $locationProvider){
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/home.html'
      })
      .when('/chatroom', {
        templateUrl: 'views/pages/chat.html',
        controller: 'ChatController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }

  Routes.$inject = ['$routeProvider', '$locationProvider'];
})();