calendarApp.controller('calendarCtrl',[
'$scope', 'uiCalendarConfig', '$routeParams', 'eventData', 
function($scope, uiCalendarConfig, $routeParams, eventData){
  // do a load events for your service
  // bind your eventsources to the events that are loaded
  // $scope.eventSources = eventData.data;

  $scope.eventSources = eventData.data;


  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        left: 'month basicWeek basicDay agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
    }
  }
}])