calendarApp.controller('calendarCtrl',[
'$scope', 'uiCalendarConfig', '$routeParams', 'eventData', '$location', 
function($scope, uiCalendarConfig, $routeParams, eventData, $location){
  // do a load events for your service
  // bind your eventsources to the events that are loaded
  // $scope.eventSources = eventData.data;

  $scope.eventSources = [eventData.data];

  $scope.editEvent = function(eventId){
    $location.url('/events/' + eventId + '/edit')
  }

  $scope.showEvent = function(eventId){
    $location.url('/events/' + eventId);
  }

  $scope.showGroup = function(groupId){
    $location.url('/groups/' + groupId + '/events')
  }

  $scope.uiConfig = {
    calendar:{
      editable: true,
      contentHeight: 500,
      lazyFetching: false,
      header:{
        left: 'prev, next',
        center: 'title',
        right: '',
      },
      eventClick: function(event) {
        $scope.showEvent(event.id);
      },
      // eventMouseover: function(event){
      //   $scope.showEvent(event.id);
      // },
    }
  }
}])