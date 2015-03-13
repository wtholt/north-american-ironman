calendarApp.controller('loginUserCtrl', ['$location', '$scope', 'userData',
function($location, $scope, userData){

  $scope.cancel = function() {
    $location.url('/');
  }

}])