var calendarApp = angular
  .module('calendarApp', ['ngRoute', 'ui.calendar'])
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
      .when('/groups',{
        templateUrl: 'assets/templates/indexGroup.html',
        controller: 'indexGroupCtrl'
      })
      .when('/groups/:group_id/events/new',{
        controller: 'newEventCtrl',
        templateUrl: 'assets/templates/newEvent.html'
      })
      .when('/groups/:group_id/events', {
        controller: 'indexEventCtrl',
        templateUrl: 'assets/templates/indexEvent.html'
      })
      .when('/events/:id', {
        controller: 'showEventCtrl',
        templateUrl: 'assets/templates/showEvent.html'
      })
      .when('/users/new', {
        controller: 'newUserCtrl',
        templateUrl: 'assets/templates/newUser.html'
      })
      .when('/events/:id/edit',{
        controller: 'editEventCtrl',
        templateUrl: 'assets/templates/editEvent.html'
      })
      .when('/sessions/new', {
        controller: 'loginUserCtrl',
        templateUrl: 'assets/templates/loginUser.html'
      })
      .otherwise({
        templateUrl: "<%=asset_path 'assets/templates/main.html'%>",
        controller: 'mainCtrl',
      })
  }])
