calendarApp.controller('calendarCtrl',[
'$scope', 'uiCalendarConfig', '$routeParams', 'eventData', 
function($scope, uiCalendarConfig, $routeParams, eventData){
  // do a load events for your service
  // bind your eventsources to the events that are loaded
  // $scope.eventSources = eventData.data;

  $scope.eventSources = [eventData.data.events];

  $scope.uiConfig = {
    calendar:{
      editable: true,
      contentHeight: 600,
      header:{
        left: 'prev, next',
        center: 'title',
        right: '',
      },
    }
  }
}])