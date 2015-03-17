calendarApp.controller('editGroupCtrl', ['$location', '$scope', 'groupData', '$routeParams', '$q', function($location, $scope, groupData, $routeParams, $q){
  console.log('inside editGroupCtrl')

  $scope.groupIndex = function() {
    $location.url('/groups');
  }


  $scope.editGroup = null;
  $scope.findGroup = function() {
    $scope.editGroup = groupData.findGroup($routeParams.id);
  }

  $scope.findGroup();
  this.deferred = $q.defer();
  this.deferred.promise.then($scope.findGroup);
  groupData.loadGroups(this.deferred);
  
  $scope.submitGroupForm = function(){
    groupData.updateGroup(
    {
      group: {
        id: $routeParams.id, 
        name: $scope.editGroup.name,
        info: $scope.editGroup.info,
        city: $scope.editGroup.city,
        state: $scope.editGroup.state,
        zip: $scope.editGroup.zip
      }
    }
    );
    $scope.editGroup.name = '';
    $scope.editGroup.info = '';
    $scope.editGroup.city = '';
    $scope.editGroup.state = '';
    $scope.editGroup.zip = '';
    $location.url('/groups');
  }

}])