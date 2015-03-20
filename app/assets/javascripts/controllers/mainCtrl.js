var mainCtrl = calendarApp.controller('mainCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth){

  $scope.isNotLoggedIn = function() {
    if(Auth.isAuthenticated() == false)
      return true;
  }

  $scope.isLoggedIn = function() {
    if(Auth.isAuthenticated() == true)
      return true;
  }

  $scope.viewGroups = function() {
    $location.url('/groups')
  }

  $scope.signUp = function() {
    $location.url('/users/sign_up')
  }

  $scope.login = function() {
    $location.url('/users/sign_in')
  }

  $scope.logout = function() {
    Auth.logout().then(function(currentUser){
    }, function(error) {

    });
  }
}])