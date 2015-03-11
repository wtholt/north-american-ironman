calendarApp.controller('showEventCtrl', ['$location', '$scope', 'eventData', '$routeParams',
function($location, $scope, eventData, $routeParams){
  console.log('inside showEventCtrl')

  $scope.events = eventData.data;
  eventData.loadOneEvent();


}])