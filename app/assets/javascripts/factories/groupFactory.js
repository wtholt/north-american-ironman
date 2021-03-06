calendarApp.factory('groupData',['$http', '$routeParams', '$q', function($http, $routeParams, $q){
  groupData = {
    data: {
      groups: [
      ]
    },
    isLoaded: false
  }
  groupData.loadGroups = function(){
    if(groupData.isLoaded == false){
      $http.get('/groups.json').success(function(groupsFromServer){
        groupData.isLoaded = true;
        _.each(groupsFromServer, function(group){
          groupData.pushGroup(group)
        })
      })
    }
  }

  groupData.loadOneGroup = function(groupId) {
    console.log(groupId);
    console.log(groupData.data.groups);
    var showGroup = _.findWhere( groupData.data.groups, {id: parseInt(groupId)});
    return showGroup
    
    // return the group by groupId
    // var foundGroup = _.findWhere( groupData.data.groups, {id: parseInt(group.group.id)})

  }

  groupData.pushGroup = function(group) {
    groupData.data.groups.push(group);
  }

  groupData.addGroup = function(group){
    $http.post('/groups.json', group).success(function(groupsFromServer){
      groupData.pushGroup(groupsFromServer);
    })
  }
   groupData.deleteGroup = function(groupId) {
    $http.delete('/groups/' + groupId + '.json').success(function(data){
      var deletedGroup = groupData.findGroup(groupId);
      groupData.data.groups = _.without(groupData.data.groups, deletedGroup)
    })
  }

   groupData.findGroup = function(groupId) {
    return _.findWhere( groupData.data.groups, {id: parseInt(groupId)});
  }

  groupData.updateGroup = function(group) {
    $http.patch('/groups/' + group.group.id + '.json', group).success(function(data){
      var foundGroup = _.findWhere( groupData.data.groups, {id: parseInt(group.group.id)})
      foundGroup.name = data.name
      foundGroup.info = data.info
      foundGroup.city = data.city
      foundGroup.state = data.state
      foundGroup.zip = data.zip
    })
  }

  return groupData;




}])