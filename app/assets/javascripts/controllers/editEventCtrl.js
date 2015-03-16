calendarApp.controller('editEventCtrl', ['$location', '$scope', 'eventData', '$routeParams', '$q', 
function($location, $scope, eventData, $routeParams, $q){
  console.log('inside editEventCtrl')


$scope.editEvent = null;
$scope.findEvent = function() {
  $scope.editEvent = eventData.findEvent($routeParams.id);
}

$scope.findEvent();
this.deferred = $q.defer();
this.deferred.promise.then($scope.findEvent);
eventData.loadEvents(this.deferred);
$scope.submitEventForm = function(){
  eventData.updateEvent(
  {
    event: {
      id: $routeParams.id,
      title: $scope.editEvent.name,
      info: $scope.editEvent.info,
      location: $scope.editEvent.location,
      start: $scope.editEvent.start,
      end: $scope.editEvent.end,
      address: $scope.editEvent.address,
      city: $scope.editEvent.city,
      state: $scope.editEvent.state,
      zip: $scope.editEvent.zip
    }
  }
  );
  $scope.editEvent.title = '';
  $scope.editEvent.info = '';
  $scope.editEvent.location = '';
  $scope.editEvent.address = '';
  $scope.editEvent.city = '';
  $scope.editEvent.state = '';
  $scope.editEvent.zip = '';
  $location.url('/events/' + $routeParams.id)
}

}])