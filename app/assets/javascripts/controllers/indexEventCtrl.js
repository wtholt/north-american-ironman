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
}])