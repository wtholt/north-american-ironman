calendarApp.controller('navbarCtrl', ['$location', '$scope', 'Auth', '$route', 'eventData', 'groupData',
function($location, $scope, Auth, $route, eventData, groupData){
  console.log('inside navbar');

  $scope.isLoggedIn = function() {
    if(Auth.isAuthenticated() == false)
      return true;
  }

  $scope.isNotLoggedIn = function() {
    if(Auth.isAuthenticated() == true)
      return true;
  }

  $scope.logout = function() {
    Auth.logout().then(function(currentUser){
    }, function(error) {

    });
    groupData.data.groups = []
    groupData.isLoaded = false
    eventData.data.events = []
    eventData.isLoaded = false
    $location.url('/');
  }


  $scope.signUp = function() {
    $location.url('/users/sign_up')
  }

  $scope.login = function() {
    $location.url('/users/sign_in')
  }

  $scope.home = function() {
    $location.url('/')
  }


}])