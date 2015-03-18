var mainCtrl = calendarApp.controller('mainCtrl', ['$scope', '$location', function($scope, $location){
  console.log('inside main controller')

  $scope.viewGroups = function() {
    $location.url('/groups')
  }

  $scope.signUp = function() {
    $location.url('/users/sign_up')
  }
}])