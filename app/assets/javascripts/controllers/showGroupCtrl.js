calendarApp.controller('showGroupCtrl', ['$location', '$scope', 'groupData', '$routeParams',
 function($location, $scope, groupData, $routeParams){
  console.log('inside showGroupCtrl')
  $scope.groups = groupData.data;
  groupData.loadGroups();

  $scope.groupIndex = function() {
    $location.url('/groups');
  }

  $scope.addEvent = function(groupId) {
    $location.url('/groups/' + groupId + '/events/new')
  }

  $scope.eventIndex = function(groupId) {
    $location.url('/groups/' + groupId + '/events')
  }


}])