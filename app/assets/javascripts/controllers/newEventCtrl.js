calendarApp.controller('newEventCtrl', ['$location', '$scope', 'eventData', '$routeParams', 
  function($location, $scope, eventData, $routeParams){
  console.log('inside newEventCtrl')

  $scope.groupShow = function() {
    $location.url('/groups/' + $routeParams.group_id)

  }

  $scope.submitEventForm = function(groupId) {
    eventData.addEvent(
    {
      event: {
        title: $scope.formEventTitle,
        info: $scope.formEventInfo,
        location: $scope.formEventLocation,
        start: $scope.formEventDate,
        end: $scope.formEventEndDate,
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
    $scope.formEventDate = '';
    $scope.formEventEndDate = '';
    $scope.formEventAddress = '';
    $scope.formEventCity = '';
    $scope.formEventState = '';
    $scope.formEventZip = '';
    $location.url('/groups/' + $routeParams.group_id + '/events')
  }


}])