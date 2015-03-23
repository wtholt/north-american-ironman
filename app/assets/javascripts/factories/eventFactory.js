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
    console.log(eventData.data.events);
    _.each(eventData.data.events, function(event){
      event.start = moment(event.start, "MM-DD-YYYY");
      event.end = moment(event.end, "MM-DD-YYYY");
    })
    console.log(eventData.data.events);
    return _.findWhere( eventData.data.events, {id: parseInt(eventId)})
  }

  eventData.pushEvent = function(event){
    eventData.data.events.push(event);
  }

  eventData.addEvent = function(event) {
    $http.post('/groups/' + $routeParams.group_id + '/events', event).success(function(eventsFromServer){
      console.log("before", eventsFromServer);
      _.each(eventsFromServer, function(event) {
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      })
      console.log("after", eventsFromServer);
      eventData.pushEvent(eventsFromServer);
    })
  }

  eventData.updateEvent = function(event) {
    $http.patch('/events/' + event.event.id, event).success(function(data){
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