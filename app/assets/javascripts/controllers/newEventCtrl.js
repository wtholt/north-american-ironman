calendarApp.controller('newEventCtrl', ['$location', '$scope', 'eventData', '$routeParams', 
  function($location, $scope, eventData, $routeParams){
  console.log('inside newEventCtrl')

  $scope.groupShow = function() {
    $location.url('/groups/' + $routeParams.group_id)

  }

  $scope.submitEventForm = function() {
    eventData.addEvent(
    {
      event: {
        name: $scope.formEventName,
        info: $scope.formEventInfo,
        location: $scope.formEventLocation,
        address: $scope.formEventAddress,
        city: $scope.formEventCity,
        state: $scope.formEventState,
        zip: $scope.formEventZip
      }
    }
    );
    $scope.formEventName = '';
    $scope.formEventInfo = '';
    $scope.formEventLocation = '';
    $scope.formEventAddress = '';
    $scope.formEventCity = '';
    $scope.formEventState = '';
    $scope.formEventZip = '';
    $location.url('/groups/' + groupId + '/events')
  }


}])