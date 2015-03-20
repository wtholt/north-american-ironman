var mainCtrl = calendarApp.controller('mainCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth){
  console.log('inside main controller')

  $scope.authenticate = function() {
    
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