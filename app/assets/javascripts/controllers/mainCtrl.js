var mainCtrl = calendarApp.controller('mainCtrl', ['$scope', '$location', 'Auth', 'flash', function($scope, $location, Auth, flash){
  console.log('inside main controller')



  $scope.viewGroups = function() {
    $location.url('/groups')
  }

  $scope.signUp = function() {
    $location.url('/users/sign_up')
  }

  $scope.login = function() {
    $location.url('/users/sign_in')
    flash.success = 'Signed in successfully'
  }

  $scope.logout = function() {
    Auth.logout().then(function(currentUser){
    }, function(error) {

    });
  }
}])