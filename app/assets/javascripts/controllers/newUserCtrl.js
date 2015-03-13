calendarApp.controller('newUserCtrl', ['$location', '$scope', 'userData', function($location, $scope, userData){
  console.log('inside newUserCtrl')

  $scope.cancel = function() {
    $location.url('/');
  }

  $scope.submitNewUserForm = function() {
    userData.addUser(
    {
      user: {
        username: $scope.formUserName,
        password_digest: $scope.formUserPassword,
      }
    }
    );
    $scope.formUserName = '';
    $scope.formUserPassword = '';
  }
}])