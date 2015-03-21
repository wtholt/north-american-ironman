calendarApp.controller('calendarCtrl',[
'$scope', 'uiCalendarConfig', '$routeParams', 'eventData', '$location', 
function($scope, uiCalendarConfig, $routeParams, eventData, $location){
  // do a load events for your service
  // bind your eventsources to the events that are loaded
  // $scope.eventSources = eventData.data;

  $scope.eventSources = [eventData.data];

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
      eventClick: function(){
        $scope.$apply(function(){
          $scope.showEvent();
        })
      }
    }
  }
}])