calendarApp.factory('eventData', ['$http', '$routeParams', 'moment', function($http, $routeParams, moment){
  eventData = {
    data: {
      events: [
      ],
      color: 'red'
    },
    isLoaded: false
  }

  eventData.loadEvents = function(group_id){
    if(eventData.isLoaded == false){
      $http.get('/groups/' + group_id + '/events.json').success(function(eventsFromServer){
        console.dir(eventsFromServer);
        eventData.data.events = eventsFromServer;
        console.dir(eventData.data);
      });
      console.dir(eventData.data);
    }
  }
  eventData.findEvent = function(eventId) {
    // _.each(eventData.data.events, function(event){
    //   event.start = Date.parse(event.start);
    //   event.end = Date.parse(event.end);
    // })
    return _.findWhere( eventData.data.events, {id: parseInt(eventId)})
  }

  eventData.pushEvent = function(event){
    eventData.data.events.push(event);
  }

  eventData.addEvent = function(event) {
    $http.post('/groups/' + $routeParams.group_id + '/events.json', event).success(function(eventsFromServer){
      eventData.pushEvent(eventsFromServer);
    })
  }

  eventData.updateEvent = function(event) {
    $http.patch('/events/' + event.event.id + '.json', event).success(function(data){
      var foundEvent = _.findWhere( eventData.data.events, {id: parseInt(event.event.id)})
      foundEvent.title = data.title
      foundEvent.info = data.info
      foundEvent.location = data.location
      foundEvent.start = data.start
      foundEvent.end = data.end
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