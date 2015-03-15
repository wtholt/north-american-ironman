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
  eventData.findEvent = function(eventId) {
    return _.findWhere( eventData.data.events, {id: parseInt(eventId)})
  }

  eventData.pushEvent = function(event){
    eventData.data.events.push(event);
  }

  eventData.addEvent = function(event) {
    $http.post('/groups/' + $routeParams.group_id + '/events', event).success(function(eventsFromServer){
      eventData.pushEvent(eventsFromServer);
    })
  }

  eventData.updateEvent = function(event) {
    $http.patch('/events/' + event.event.id, event).success(function(data){
      var foundEvent = _.findWhere( eventData.data.events, {id: parseInt(event.event.id)})
      foundEvent.name = data.name
      foundEvent.info = data.info
      foundEvent.location = data.location
      foundEvent.address = data.address
      foundEvent.city = data.city
      foundEvent.state = data.state
      foundEvent.zip = data.zip
    })
  }

  eventData.deleteEvent = function(eventId) {
    $http.delete('/events/' + eventId + '.json').success(function(data){
      var deletedEvent = eventData.findEvent(eventId);
      eventData.data.events = _.without(eventData.data.events, deletedEvent)
    })
  }


  return eventData;

}])