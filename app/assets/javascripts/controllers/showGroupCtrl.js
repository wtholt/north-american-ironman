calendarApp.controller('showGroupCtrl', ['$location', '$scope', 'groupData', '$routeParams', '$q',
 function($location, $scope, groupData, $routeParams, $q){
  console.log('inside showGroupCtrl')
  $scope.groups = groupData.data;
  
  $scope.group = null
  $scope.findGroup = function(){
    $scope.group = groupData.findGroup($routeParams.id)
  }
  $scope.findGroup();
  this.deferred = $q.defer();
  this.deferred.promise.then($scope.findGroup);
  groupData.loadGroups(this.deferred);
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