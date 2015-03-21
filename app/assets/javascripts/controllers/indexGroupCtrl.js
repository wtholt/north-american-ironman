var indexGroupCtrl = calendarApp.controller('indexGroupCtrl', ['$scope', 'groupData', '$location', '$q', function($scope, groupData, $location, $q){
  console.log('inside indexGroupCtrl');
  $scope.groups = groupData.data;
  $scope.formGroupName = '';
  $scope.formGroupInfo = '';
  $scope.formGroupCity = '';
  $scope.formGroupState = '';
  $scope.formGroupZip = '';
  groupData.loadGroups();

  $scope.createNewGroup = function() {
    $location.url('/groups/new')
  }

  $scope.deleteGroup = function(groupId) {
    groupData.deleteGroup(groupId);
  }

  $scope.editGroup = function(groupId) {
    $location.url('/groups/' + groupId + '/edit')
  }

  $scope.showGroup = function(groupId) {
    $location.url('/groups/' + groupId)
  }

  $scope.home = function() {
    $location.url('/');
  }

}]);