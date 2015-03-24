calendarApp.controller('showEventCtrl', ['$location', '$scope', 'eventData', '$routeParams',
function($location, $scope, eventData, $routeParams){
  console.log('inside showEventCtrl')
  $scope.events = eventData.data;
  $scope.event = null
  $scope.findEvent = function(){
    $scope.event = eventData.findEvent($routeParams.id)
  }
  $scope.findEvent();

  $scope.return = function(){
    $location.url('/groups/' + $scope.event.group_id + '/events')
  }

  $scope.edit = function(){
    $location.url('/events/' + $routeParams.id + '/edit')
  }

  $scope.delete = function(eventId){
    eventData.deleteEvent(eventId);
    $location.url('/groups/' + $scope.event.group_id + '/events')
  }


}])