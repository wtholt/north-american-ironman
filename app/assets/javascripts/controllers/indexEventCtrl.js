var indexEventCtrl = calendarApp.controller('indexEventCtrl', ['$scope', 'eventData', '$location', '$routeParams', function($scope, eventData, $location, $routeParams){
  console.log('inside indexEventCtrl');
  $scope.events = eventData.data;
  eventData.loadEvents($routeParams.group_id);

  $scope.returnToGroup = function() {
    $location.url('/groups/' + $routeParams.group_id)
  }

  $scope.showEvent = function(eventId) {
    $location.url('/events/' + eventId)
  }

  $scope.editEvent = function(eventId){
    $location.url('/events/' + eventId + '/edit')
  }

  $scope.deleteEvent = function(eventId){
    eventData.deleteEvent(eventId);
  }

  $scope.addEvent = function() {
    $location.url('/groups/' + $routeParams.group_id + '/events/new')
  }


}])