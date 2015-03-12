calendarApp.controller('calendarCtrl', function($scope){
  $scope.eventSources = [];
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
})