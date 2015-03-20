calendarApp.controller('navbarCtrl', ['$location', '$scope', 'Auth',
function($location, $scope, Auth){
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