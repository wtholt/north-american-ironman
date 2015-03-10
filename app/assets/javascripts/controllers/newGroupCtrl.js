calendarApp.controller('newGroupCtrl', ['$location', '$scope', 'groupData', function($location, $scope, groupData){
  console.log('inside newGroupCtrl')

  $scope.groupIndex = function() {
    $location.url('/');
  }

  $scope.submitGroupForm = function() {
    groupData.addGroup(
    {
      group: {
        name: $scope.formGroupName, 
        info: $scope.formGroupInfo, 
        city: $scope.formGroupCity,
        state: $scope.formGroupState,
        zip: $scope.formGroupZip,
      }
    }
    );
    $scope.formGroupName = '';
    $scope.formGroupInfo = '';
    $scope.formGroupCity = '';
    $scope.formGroupState = '';
    $scope.formGroupZip = '';
    $location.url('/');
  };

}])