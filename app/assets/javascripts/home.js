var calendarApp = angular
  .module('calendarApp', ['Devise', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/groups/new', {
        templateUrl: 'assets/templates/newGroup.html',
        controller: 'newGroupCtrl'
      })
      .when('/groups/:id/edit',{
        controller: 'editGroupCtrl',
        templateUrl: 'assets/templates/editGroup.html'
      })
      .when('/groups/:id', {
        controller: 'showGroupCtrl',
        templateUrl: 'assets/templates/showGroup.html'
      })
      .otherwise({
        templateUrl: 'assets/templates/index.html',
        controller: 'indexGroupCtrl'
      })
  }])
  .config(function(AuthProvider) {

  })
