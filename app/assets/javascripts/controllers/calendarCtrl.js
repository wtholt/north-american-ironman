calendarApp.controller('calendarCtrl',[
'$scope', 'uiCalendarConfig', '$routeParams', 'eventData', 
function($scope, uiCalendarConfig, $routeParams, eventData){
  $scope.eventSources = [
    {
      url: '/groups/10/events.json',
      type: 'GET',
      color: 'red',
    }
  ];
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