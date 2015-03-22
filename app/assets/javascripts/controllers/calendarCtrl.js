calendarApp.controller('calendarCtrl',[
'$scope', 'uiCalendarConfig', '$routeParams', 'eventData', '$location', 
function($scope, uiCalendarConfig, $routeParams, eventData, $location){
  // do a load events for your service
  // bind your eventsources to the events that are loaded
  // $scope.eventSources = eventData.data;

  $scope.eventSources = [eventData.data];

  $scope.showEvent = function(){
  }

  $scope.uiConfig = {
    calendar:{
      editable: true,
      contentHeight: 600,
      lazyFetching: false,
      header:{
        left: 'prev, next',
        center: 'title',
        right: '',
      },
      eventClick: function(eventData, event, view){
        var content = '<h3>'+eventData.data.title+'</h3>'
      }
    }
  }
}])