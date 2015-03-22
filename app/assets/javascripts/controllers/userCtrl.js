calendarApp.controller('userCtrl', ['$location', '$scope', '$routeParams', 'Auth',
function($location, $scope, $routeParams, Auth){
  console.log('inside userCtrl');

  $scope.cancel = function() {
    $location.url('/');
  }

  $scope.submitSignUpForm = function() {
    var credentials = {
      name: $scope.formSignUpName,
      email: $scope.formSignUpEmail,
      password: $scope.formSignUpPassword,
      password_confirmation: $scope.formSignUpPasswordConfirmation
    };
    Auth.register(credentials).then(function(registeredUser){
      $location.url('/');
      console.log(registeredUser);
    }, function(error){
    });
  }

  $scope.submitLogInForm = function() {
    var credentials = {
      email: $scope.formSignUpEmail,
      password: $scope.formSignUpPassword,
    };
    Auth.login(credentials).then(function(user) {
      console.log(user);
      $location.url('/');
    }, function(error){
      $scope.invalid = true;
    });
  }

  $scope.$on('devise:login', function(event, currentUser) {

  });

  $scope.$on('devise:new-session', function(event, currentUser){

  });

}])