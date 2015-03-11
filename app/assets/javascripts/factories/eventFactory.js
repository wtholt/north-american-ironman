calendarApp.factory('eventData', ['$http', '$routeParams', function($http, $routeParams){
  eventData = {
    data: {
      events: [
      ]
    },
  }

  eventData.loadEvents = function(){
    $http.get('/groups/' + $routeParams.group_id + '/events.json').success(function(eventsFromServer){
      _.each(eventsFromServer, function(event){
        eventData.pushEvent(event)
      })
    })
  }

  eventData.loadOneEvent = function(){
    $http.get('/events/' + $routeParams.id + '.json').success(function(eventFromServer){
      _.each(eventFromServer, function(event){
        eventData.pushEvent(event)
      })
    })
  }

  eventData.pushEvent = function(event){
    eventData.data.events.push(event);
  }

  eventData.addEvent = function(event) {
    $http.post('/groups/' + $routeParams.group_id + '/events', event).success(function(eventsFromServer){
      eventData.pushEvent(eventsFromServer);
    })
  }

  return eventData;

}])