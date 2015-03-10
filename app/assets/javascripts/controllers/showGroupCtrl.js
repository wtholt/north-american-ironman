calendarApp.controller('showGroupCtrl', ['$location', '$scope', 'groupData', function($location, $scope, groupData){
  console.log('inside showGroupCtrl')
  $scope.groups = groupData.data;
  groupData.loadGroups();

  $scope.groupIndex = function() {
    $location.url('/');
  }


}])