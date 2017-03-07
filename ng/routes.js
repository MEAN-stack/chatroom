angular.module('app')
.config(function($routeProvider) {
  $routeProvider
  .when('/',         {controller: 'RoomsCtrl',   templateUrl: 'home.html'})
  .when('/register', {controller: 'RegisterCtrl', templateUrl: 'register.html'})
  .when('/login',    {controller: 'LoginCtrl',    templateUrl: 'login.html'})
})
