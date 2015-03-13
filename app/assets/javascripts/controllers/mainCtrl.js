var mainCtrl = calendarApp.controller('mainCtrl', ['$scope', '$location', function($scope, $location){
  console.log('inside main controller')

  $scope.viewGroups = function() {
    $location.url('/groups')
  }

  $scope.newUser = function(){
    $location.url('/users/new');
  }

  $scope.loginUser = function(){
    $location.url('sessions/new');
  }
}])